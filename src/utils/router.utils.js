const authenticationMiddleware = require('../middleware/authentication.middleware');
const { resolveFromVersion } = require('./resolve.utils');
const expressGraphql = require('express-graphql');
const errorUtils = require('./error.utils');
const { VERSION } = require('../config');
const glob = require('glob');
const path = require('path');

const { GraphQLSchema, GraphQLObjectType } = require('graphql');

// Helper function for generating GraphQL schemas
function generateRootSchema(version, query_fields, mutation_fields) {
	let schema = {};
	// If we have query fields, add a query schema
	if (Object.getOwnPropertyNames(query_fields).length) {
		schema.query = new GraphQLObjectType({
			name: 'Query',
			description: `Root query for ${version} resources`,
			fields: query_fields,
		});
	}
	// If we have mutation fields, add a mutation schema
	if (Object.getOwnPropertyNames(mutation_fields).length) {
		schema.mutation = new GraphQLObjectType({
			name: 'Mutation',
			description: `Root mutation for ${version} resources`,
			fields: mutation_fields,
		});
	}

	return new GraphQLSchema(schema);
}

// Helper for generating instance schemas
function generateInstanceSchema(version, name, query) {
	return new GraphQLSchema({
		query: new GraphQLObjectType({
			name: `${name}_Query`,
			description: `${name} query for a specific ${name}.`,
			fields: { [name]: query },
		}),
	});
}

// Helper function for generating graphql server
function setupGraphqlServer(server, version, options) {
	return expressGraphql((req, res) => {
		let context = { server, req, res, version };
		return Object.assign({ context }, options);
	});
}

// Helper for formatting graphql errors
function graphqlErrorFormatter(logger, version) {
	return err => {
		// If we already have a graphql formatted error than this error is probably
		// intentionally thrown. If it is not, the FHIR spec says for GraphQL errors
		// to be placed in extensions under a resource property.
		let extensions = err.extensions
			? err.extensions
			: {
					resource: errorUtils.internal(version, err.message),
			  };

		// Log the resource portions of the error
		logger.error('Unexpected GraphQL Error', extensions.resource);

		// return our custom formatted error, any additional info
		// should be placed under extensions
		return {
			path: err.path,
			message: err.message,
			locations: err.locations,
			extensions: extensions,
		};
	};
}

/**
 * @name configureRoutes
 * @summary Setup GraphQL Routes based on profile registration
 * @description Find all the profile configurations and register
 * any queries, mutations, or subscriptions found
 */
function configureRoutes(server, options = {}) {
	// We need to setup a server for each route configured in VERSION
	let { versions = [], resourceConfig = {} } = options;

	versions.forEach(version => {
		// Locate all the profile configurations for setting up routes
		let config_paths = glob.sync(
			resolveFromVersion(version, resourceConfig.profilesRelativePath),
		);
		let configs = config_paths.map(require);

		// Grab all the necessary properties from each config
		// Ignore instance_queries for now, we will add them in later
		let query_fields = {},
			mutation_fields = {};

		for (let i = 0; i < configs.length; i++) {
			let config = configs[i] || {};
			// If we have properties, than there are no capabilities defined for this profile
			if (Object.getOwnPropertyNames(config).length === 0) {
				continue;
			}
			// Assign new properties from each one into queries and mutations
			Object.assign(query_fields, config.query);
			Object.assign(mutation_fields, config.mutation);
			// Go ahead and add the endpoint for instances if it is defined
			if (config.instance) {
				let { path: instance_path, query, name } = config.instance;

				server.app.use(
					// Path for this graphql endpoint
					path.posix.join(instance_path, '([$])graphql'),
					// Add our validation middlware
					authenticationMiddleware(server),
					// middleware wrapper for Graphql Express
					setupGraphqlServer(server, version, {
						formatError: graphqlErrorFormatter(server.logger, version),
						schema: generateInstanceSchema(version, name, query),
					}),
				);
			}
		}

		// Generate a top-level schema for all resources in this version
		let rootSchema = generateRootSchema(version, query_fields, mutation_fields);

		// Add our graphql endpoint
		server.app.use(
			// Path for this graphql endpoint
			`/${version}/([\$])graphql`,
			// Add our validation middlware
			authenticationMiddleware(server),
			// middleware wrapper for Graphql Express
			setupGraphqlServer(server, version, {
				formatError: graphqlErrorFormatter(server.logger, version),
				schema: rootSchema,
			}),
		);

		// Add a graphiql endpoint for exploring only if we're not in production
		if (!server.env.IS_PRODUCTION) {
			server.app.use(
				// Path for this graphiql endpoint
				`/${version}/([\$])graphiql`,
				// middleware wrapper for Graphql Express
				setupGraphqlServer(server, version, {
					formatError: graphqlErrorFormatter(server.logger, version),
					schema: rootSchema,
					graphiql: true,
				}),
			);
		}
	});
}

/**
 * @name parseVersionFromUrl
 * @summary Attempt to parse the version from the url
 */
function parseVersionFromUrl(url, server_config) {
	let possible_version = url.split('/')[1];
	return VERSION[possible_version]
		? VERSION[possible_version]
		: server_config.defaultVersion;
}

module.exports = {
	graphqlErrorFormatter,
	parseVersionFromUrl,
	configureRoutes,
};
