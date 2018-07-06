const { internal, notFound } = require('./error.utils');
const { VERSION } = require('../config');

describe('Error Utils Test', () => {

	describe('internal', () => {

		test('should return an operation outcome', () => {
			let error = internal(VERSION['3_0_1']);
			expect(error.resourceType).toEqual('OperationOutcome');
		});

		test('should return an operation outcome with issue code of not-found', () => {
			let error = internal(VERSION['3_0_1']);
			let [ issue ] = error.issue;
			expect(issue.code).toEqual('exception');
			expect(issue.severity).toEqual('error');
		});

		test('should return an operation outcome with the provided diagnostics', () => {
			let error = internal(VERSION['3_0_1'], 'Some Message');
			let [ issue ] = error.issue;
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
			let [ issue ] = error.issue;
			expect(issue.code).toEqual('not-found');
			expect(issue.severity).toEqual('error');
		});

		test('should return an operation outcome with the provided diagnostics', () => {
			let error = notFound(VERSION['3_0_1'], 'Some Message');
			let [ issue ] = error.issue;
			expect(issue.diagnostics).toEqual('Some Message');
		});

	});

});
