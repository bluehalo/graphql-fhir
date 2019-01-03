const { GraphQLError } = require('graphql');
const { VERSION } = require('../config');

const {
	internal,
	notFound,
	insufficientScope,
	formatErrorForGraphQL,
} = require('./error.utils');

describe('Error Utils Test', () => {
	describe('internal', () => {
		test('should return an operation outcome', () => {
			let error = internal(VERSION['3_0_1']);

			expect(error.resourceType).toEqual('OperationOutcome');
		});

		test('should return an operation outcome with issue code of not-found', () => {
			let error = internal(VERSION['3_0_1']);
			let [issue] = error.issue;

			expect(issue.code).toEqual('exception');
			expect(issue.severity).toEqual('error');
		});

		test('should return an operation outcome with the provided diagnostics', () => {
			let error = internal(VERSION['3_0_1'], 'Some Message');
			let [issue] = error.issue;

			expect(issue.diagnostics).toEqual('Some Message');
		});
	});

	describe('notFound', () => {
		test('should return an operation outcome', () => {
			let error = notFound(VERSION['3_0_1']);

			expect(error.resourceType).toEqual('OperationOutcome');
		});

		test('should return an operation outcome with issue code of not-found', () => {
			let error = notFound(VERSION['3_0_1']);
			let [issue] = error.issue;

			expect(issue.code).toEqual('not-found');
			expect(issue.severity).toEqual('error');
		});

		test('should return an operation outcome with the provided diagnostics', () => {
			let error = notFound(VERSION['3_0_1'], 'Some Message');
			let [issue] = error.issue;

			expect(issue.diagnostics).toEqual('Some Message');
		});
	});

	describe('insufficientScope', () => {
		test('should return an operation outcome', () => {
			let error = insufficientScope(VERSION['3_0_1']);

			expect(error.resourceType).toEqual('OperationOutcome');
		});

		test('should return an operation outcome with issue code of forbidden', () => {
			let error = insufficientScope(VERSION['3_0_1']);
			let [issue] = error.issue;

			expect(issue.code).toEqual('forbidden');
			expect(issue.severity).toEqual('error');
		});

		test('should return an operation outcome with the provided diagnostics', () => {
			let error = insufficientScope(VERSION['3_0_1'], 'Some Message');
			let [issue] = error.issue;

			expect(issue.diagnostics).toEqual('Some Message');
		});
	});

	describe('formatErrorForGraphQL', () => {
		test('should return a valid GraphQL error', () => {
			let operationOutcome = { issue: [{ diagnostics: 'FUBAR' }] };
			let error = formatErrorForGraphQL(operationOutcome);

			expect(error instanceof GraphQLError).toBeTruthy();
		});

		test('should return any provided JSON embedded in the extensions property', () => {
			let operationOutcome = { issue: [{ diagnostics: 'FUBAR' }] };
			let error = formatErrorForGraphQL(operationOutcome);

			expect(error.extensions.resource).toBeDefined();
			expect(error.extensions.resource).toEqual(operationOutcome);
		});
	});
});
