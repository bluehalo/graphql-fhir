const {
	configureRoutes,
	parseVersionFromUrl,
	graphqlErrorFormatter,
} = require('./router.utils');
const { formatErrorForGraphQL } = require('./error.utils');
const { VERSION, RESOURCE_CONFIG } = require('../config');
const { GraphQLError } = require('graphql');

let server, logger;

describe('Router Utils Test', () => {
	beforeEach(() => {
		// Mock some of our server properties
		server = {
			env: { IS_PRODUCTION: true },
			app: { use: jest.fn() },
		};
		// Create a mock logger
		logger = { error: jest.fn() };
	});

	describe('configureRoutes', () => {
		beforeEach(() => {
			// Reset our mock
			let mock = require('express-graphql');
			mock.mockReset();
		});

		test('should not invoke the expressGraphql module when no options are provided', () => {
			// Grab a mock
			let { mock } = require('express-graphql');
			// configure routes
			configureRoutes(server);
			// This should have length of 0
			expect(mock.calls.length).toBe(0);
		});

		test('should invoke the expressGraphql module with options and context', () => {
			// Grab a mock
			let { mock } = require('express-graphql');
			// configure routes
			configureRoutes(server, {
				resourceConfig: RESOURCE_CONFIG,
				versions: Object.keys(VERSION),
			});
			// check the mock
			mock.calls.forEach(call => {
				// each argument should be called with a function that takes a req and res
				// and returns them in context with any other provided options
				let arg = call[0];
				// invoke arg and check the results
				let result = arg('req', 'res');
				// check context for all props
				expect(result.context).toBeDefined();
				expect(result.context.req).toEqual('req');
				expect(result.context.res).toEqual('res');
				// Can't test equality because the server's calls change
				expect(result.context.server.env).toEqual(server.env);
				// check that schema is never invalid
				expect(result.schema).toBeDefined();
			});
			// It should also add a graphql endpoint as the last entry
			// to app.use as opposed to a graphiql endpoint
			let use_mock = server.app.use.mock;
			let args = use_mock.calls[mock.calls.length - 1];
			expect(args[0]).toEqual(expect.stringContaining('/([$])graphql'));
		});

		test('should add a graphiql endpoint if IS_PRODUCTION is false', () => {
			// Override this property for this test
			server.env.IS_PRODUCTION = false;
			// configure routes
			configureRoutes(server, {
				resourceConfig: RESOURCE_CONFIG,
				versions: Object.keys(VERSION),
			});
			// check the calls to server.app.use
			let mock = server.app.use.mock;
			// We should have one per profile per version and one per version
			// we can check for length > 0
			expect(mock.calls.length).toBeGreaterThan(0);
			// the last one for development should be a root schema with
			// the path ending with /([\$])graphiql
			let args = mock.calls[mock.calls.length - 1];
			expect(args[0]).toEqual(expect.stringContaining('/([$])graphiql'));
		});

		test('should skip over empty exported profiles', () => {
			// Grab a mock
			let { mock } = require('express-graphql');
			// Create a mock resource config
			let mockResourceConfig = {
				profilesRelativePath: '../../utils/__mocks__/*.js',
			};
			// configure routes
			configureRoutes(server, {
				resourceConfig: mockResourceConfig,
				versions: Object.keys(VERSION),
			});
			// To verify the schema was not called with anything, we need to invoke
			// the function passed into our mock
			let expressGraphqlArgs = mock.calls[0][0]();
			let rootSchema = expressGraphqlArgs.schema;
			// Queries and Mutations ought to be undefined, GraphQL would error
			// on startup if it never received any, which we want, but we want to
			// allow users to comment out some of the profiles they don't intend
			// to support
			expect(rootSchema.getQueryType()).toBeUndefined();
			expect(rootSchema.getMutationType()).toBeUndefined();
		});
	});

	describe('parseVersionFromUrl', () => {
		// NOTE: These test against versions in the VERSION constant from config
		// This makes the test a little mirky since the output depends on a
		// separate global config
		test('should parse the version from the provided url', () => {
			// 3_0_1 is a valid version so it will work
			let version = parseVersionFromUrl('/3_0_1/graphiql', {
				defaultVersion: '3_0_2',
			});
			expect(version).toEqual('3_0_1');
		});

		// NOTE: These test against versions in the VERSION constant from config
		// This makes the test a little mirky since the output depends on a
		// separate global config
		test('should default to the defaultVersion if unable to parse a valid version', () => {
			let version = parseVersionFromUrl('/12_0_2/graphiql', {
				defaultVersion: '3_0_2',
			});
			expect(version).toEqual('3_0_2');
		});
	});

	// NOTE: For all these tests to pass, VERSION must refer to a valid version
	// that contains an operation outcome
	describe('graphqlErrorFormatter', () => {
		test('should return an error formatting function', () => {
			let errorFormatter = graphqlErrorFormatter(logger, VERSION['3_0_1']);

			expect(typeof errorFormatter).toBe('function');
		});

		test('the error formatting function should return JSON formatted for GraphQL', () => {
			let mockOperationOutcome = { issue: [{ diagnostics: 'FUBAR' }] };
			let mockError = formatErrorForGraphQL(mockOperationOutcome);
			let errorFormatter = graphqlErrorFormatter(logger, VERSION['3_0_1']);
			let results = errorFormatter(mockError);

			// All four of these keys should be present, even if some of the values are undefined
			let property_keys = Object.keys(results);
			expect(property_keys.indexOf('path')).not.toBe(-1);
			expect(property_keys.indexOf('message')).not.toBe(-1);
			expect(property_keys.indexOf('locations')).not.toBe(-1);
			expect(property_keys.indexOf('extensions')).not.toBe(-1);
		});

		test('the error formatting function should pass an error through if it contains extensions', () => {
			let mockOperationOutcome = { issue: [{ diagnostics: 'FUBAR' }] };
			let mockError = formatErrorForGraphQL(mockOperationOutcome);
			let errorFormatter = graphqlErrorFormatter(logger, VERSION['3_0_1']);
			let results = errorFormatter(mockError);

			expect(results.message).toEqual('FUBAR');
			expect(results.extensions.resource).toEqual(mockOperationOutcome);
		});

		test('the error formatting function should create an operation outcome if extensions are not present', () => {
			let mockError = new GraphQLError('NormalError');
			let errorFormatter = graphqlErrorFormatter(logger, VERSION['3_0_1']);
			let results = errorFormatter(mockError);

			expect(results.message).toBe('NormalError');
			expect(results.extensions.resource).toBeDefined();
			expect(results.extensions.resource.resourceType).toBe('OperationOutcome');
		});
	});
});
