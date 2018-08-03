const {
	internal,
	insufficientScope,
	formatErrorForGraphQL
} = require('./error.utils');

/**
* @name allowedScopes
* @description Generate an array of expected scopes. If a user is accessing a
* protected resource, one of these scopes must be present in the user's defined
* scopes.
* @param { string } name - Profile name we are checking scopes for
* @param { string } action - read or write action
* @return { Array<string> } - Array of scopes, one of which would be required
* for the request to be successful
*/
function allowedScopes (name, action) {
	let lowercaseName = name.toLowerCase();
	return [
		'user/*.*',
		`user/*.${action}`,
		`user/${lowercaseName}.*`,
		`user/${lowercaseName}.${action}`,
		`${lowercaseName}/*.*`,
		`${lowercaseName}/*.${action}`,
		`${lowercaseName}/${name}.*`,
		`${lowercaseName}/${name}.${action}`
	];
}

/**
* @name scopeInvariant
* @description Check the users scope's and context's and make sure they are
* allowed to access the resource they are attempting to access. If the user
* is not allowed to access the resource, a forbidden error should be triggered.
* @return { Function } A valid GraphQL resolver function
* @example Usage
* scopeInvariant({ action: 'read', name: 'Account', version: '3_0_1' }, accountResolver);
*/
function scopeInvariant (options, resolver) {
	let { action, name, version } = options;
	// let errorMessage = `You do not have sufficient scope to access this ${name} resource.`;

	return function scopeInvariantResolver (root, args, ctx, info) {
		let token = context.req && context.req.user && context.req.user.token;
		let expectedScopes = allowedScopes(name, action);
		let actualScopes = token.scopes;

		// Check if any of the expected scopes are present in the actual scopes
		let hasSufficientScope = expectedScopes.some(validScope =>
			actualScopes.indexOf(validScope) > -1
		);

		// If not, throw an insufficientScope error
		if (!hasSufficientScope) {
			let errorMessage = `You do not have sufficient scope for ${action} `;
			errorMessage += `access on this ${name} resource.`;

			return formatErrorForGraphQL(insufficientScope(version, errorMessage));
		}

		// If the developer configured this incorrectly, give him an actually
		// useful error message.
		if (typeof resolver !== 'function') {
			let errorMessage = 'The resolver function provided to `scopeInvariant` ';
			errorMessage += 'must be a function. Did you forget to include your ';
			errorMessage += 'resolver when you called scopeInvariant with ' + name;

			return formatErrorForGraphQL(internal(version, errorMessage));
		}
		// We have passed scope and context checks, pass the request off
		// to the actual resolver now
		else {
			return resolver(root, args, ctx, info);
		}
	};
}

module.exports = {
	scopeInvariant
};
