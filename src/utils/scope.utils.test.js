const { scopeInvariant } = require('./scope.utils');

let noScopesContext = {
	req: {
		user: { scope: '' },
	},
};

let scopesContext = {
	req: {
		user: { scope: 'user/Patient.read' },
	},
};

let authDisabledContext = {
	server: {
		env: { AUTHENTICATION: false },
	},
};

let developmentContext = {
	req: { baseUrl: '/3_0_1/$graphiql' },
	server: {
		env: {
			IS_PRODUCTION: false,
			AUTHENTICATION: true,
		},
	},
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

			results = scopeInvariant(
				{
					name: 'Test',
					version: '3_0_1',
					action: 'read',
				},
				() => {},
			);

			expect(results.extensions).toBeUndefined();
		});

		test('should return an internal error for invalid arguments', () => {
			// It requires the resolver to be of type function
			let results = scopeInvariant({
				name: 'Test',
				version: '3_0_1',
				action: 'read',
			});

			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('exception');
			expect(issue.severity).toEqual('error');
		});

		test('should return a resolver function if configured correctly', () => {
			let resolver = scopeInvariant(
				{
					name: 'Test',
					version: '3_0_1',
					action: 'read',
				},
				function mockResolver() {},
			);

			expect(typeof resolver).toEqual('function');
		});

		test('should return insufficient scope error if no user is logged in', () => {
			let resolver = scopeInvariant(
				{
					name: 'Test',
					version: '3_0_1',
					action: 'read',
				},
				function mockResolver() {},
			);

			// invoking the resolver should return an insufficient scopes error since
			// no user is associated to a request in context
			let results = resolver();
			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('forbidden');
			expect(issue.severity).toEqual('error');
		});

		test('should return insufficient scope error if no scopes are present', () => {
			let resolver = scopeInvariant(
				{
					name: 'Test',
					version: '3_0_1',
					action: 'read',
				},
				function mockResolver() {},
			);

			// invoking the resolver should return an insufficient scopes error since
			// no scopes are associated with the user
			let results = resolver(null, null, noScopesContext);
			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('forbidden');
			expect(issue.severity).toEqual('error');
		});

		test('should return insufficient scope error if insufficient scopes are present', () => {
			let resolver = scopeInvariant(
				{
					name: 'Test',
					version: '3_0_1',
					action: 'write',
				},
				function mockResolver() {},
			);

			// invoking the resolver should return an insufficient scopes error since
			// no scopes are associated with the user
			let results = resolver(null, null, scopesContext);
			expect(results.extensions.resource).toBeDefined();
			let issue = results.extensions.resource.issue[0];
			expect(issue.code).toEqual('forbidden');
			expect(issue.severity).toEqual('error');
		});

		test('should invoke the resolver without error if valid scopes are present', () => {
			let mockResult = 'DATAAAAAAAAA';
			let resolver = scopeInvariant(
				{
					name: 'Patient',
					version: '3_0_1',
					action: 'read',
				},
				() => mockResult,
			);

			let results = resolver(null, null, scopesContext);
			expect(results).toEqual(mockResult);
		});

		test('should invoke the resolver if auth is disabled', () => {
			let mockResult = 'DATAAAAAAAAA';
			let resolver = scopeInvariant(
				{
					name: 'Patient',
					version: '3_0_1',
					action: 'read',
				},
				() => mockResult,
			);

			// In this case, the middleware should pass as auth is explicitly disabled
			// even though they do not have any valid scopes
			let results = resolver(null, null, authDisabledContext);
			expect(results).toEqual(mockResult);
		});

		test('should invoke the resolver if we are in a development environment', () => {
			let mockResult = 'DATAAAAAAAAA';
			let resolver = scopeInvariant(
				{
					name: 'Patient',
					version: '3_0_1',
					action: 'read',
				},
				() => mockResult,
			);

			// In this case, the middleware should pass as auth is explicitly disabled
			// even though they do not have any valid scopes
			let results = resolver(null, null, developmentContext);
			expect(results).toEqual(mockResult);
		});
	});
});
