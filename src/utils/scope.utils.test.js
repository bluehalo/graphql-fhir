const { scopeInvariant } = require('./scope.utils');

let noScopesContext = {
	req: {
		user: {
			token: {
				scopes: []
			}
		}
	}
};

let scopesContext = {
	req: {
		user: {
			token: {
				scopes: [
					'user/Patient.read'
				]
			}
		}
	}
};

describe('Scope Utils Test', () => {

	describe('scopeInvariant', () => {

		test('should return an internal error for missing arguments', () => {
			let results, issue;
			// It requires name, version, and action to be present
			results = scopeInvariant();

			results = scopeInvariant({ name: 'Test' });
			expect(results.extensions.resource).toBeDefined();
			issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('exception');
			expect(issue.severity).toEqual('error');

			results = scopeInvariant({ name: 'Test', version: '3_0_1' });
			expect(results.extensions.resource).toBeDefined();
			issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('exception');
			expect(issue.severity).toEqual('error');

			results = scopeInvariant({
				name: 'Test',
				version: '3_0_1',
				action: 'read'
			}, () => {});

			expect(results.extensions).toBeUndefined();

		});

		test('should return an internal error for invalid arguments', () => {
			// It requires the resolver to be of type function
			let results = scopeInvariant({
				name: 'Test',
				version: '3_0_1',
				action: 'read'
			});

			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('exception');
			expect(issue.severity).toEqual('error');

		});

		test('should return a resolver function if configured correctly', () => {
			let resolver = scopeInvariant({
				name: 'Test',
				version: '3_0_1',
				action: 'read'
			}, function mockResolver () {});

			expect(typeof resolver).toEqual('function');
		});

		test('should return an insufficient scope error if no user is logged in', () => {
			let resolver = scopeInvariant({
				name: 'Test',
				version: '3_0_1',
				action: 'read'
			}, function mockResolver () {});

			// invoking the resolver should return an insufficient scopes error since
			// no user is associated to a request in context
			let results = resolver();
			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('forbidden');
			expect(issue.severity).toEqual('error');
		});

		test('should return an insufficient scope error if no scopes are present', () => {
			let resolver = scopeInvariant({
				name: 'Test',
				version: '3_0_1',
				action: 'read'
			}, function mockResolver () {});

			// invoking the resolver should return an insufficient scopes error since
			// no scopes are associated with the user
			let results = resolver(null, null, noScopesContext);
			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('forbidden');
			expect(issue.severity).toEqual('error');
		});

		test('should return an insufficient scope error if insufficient scopes are present', () => {
			let resolver = scopeInvariant({
				name: 'Test',
				version: '3_0_1',
				action: 'write'
			}, function mockResolver () {});

			// invoking the resolver should return an insufficient scopes error since
			// no scopes are associated with the user
			let results = resolver(null, null, scopesContext);
			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('forbidden');
			expect(issue.severity).toEqual('error');
		});

		test('should be able to invoke the resolver without error if valid scopes are present', () => {
			let mockResult = 'DATAAAAAAAAA';
			let resolver = scopeInvariant({
				name: 'Patient',
				version: '3_0_1',
				action: 'read'
			}, () => mockResult);

			let results = resolver(null, null, scopesContext);
			expect(results).toEqual(mockResult);
		});

	});

});
