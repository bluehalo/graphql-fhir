const {
	internal,
	insufficientScope,
	formatErrorForGraphQL,
} = require('./error.utils');

const { defaultVersion } = require('../config').SERVER_CONFIG;

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
function allowedScopes(name, action) {
	return [
		'user/*.*',
		`user/*.${action}`,
		`user/${name}.*`,
		`user/${name}.${action}`,
		'patient/*.*',
		`patient/*.${action}`,
		`patient/${name}.*`,
		`patient/${name}.${action}`,
	];
}

/**
 * @name parseScopes
 * @description Parse scopes from scope string attached to the token
 * In the future, scope may be in different formats, arrays, comma separated,
 * etc., so we can add logic to handle that later
 * @param { object } token - Tokenb containing a scope property
 * @param { string } token.scope - Space separated list of scopes
 * @return { Array<string> } - Array of scopes
 */
function parseScopes(token) {
	let scopes = (token && token.scope) || '';
	return scopes.split(' ');
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
function scopeInvariant(options = {}, resolver) {
	let { action, name, version } = options;

	// If any of these arguments are missing, this check will not be able to work
	// correctly, return an internal server error with a helpful message
	if (!action || !name || !version) {
		let errorMessage = 'Insufficent arguments provided to `scopeInvariant`. ';
		errorMessage += 'You must provide an options object with name, action, ';
		errorMessage += `and version. You provided ${JSON.stringify(options)}`;

		return formatErrorForGraphQL(
			internal(version || defaultVersion, errorMessage),
		);
	}

	// If the developer configured this incorrectly, let's give him a useful
	// error message.
	if (typeof resolver !== 'function') {
		let errorMessage = 'The resolver function provided to `scopeInvariant` ';
		errorMessage += 'must be a function. Did you forget to include your ';
		errorMessage += 'resolver when you called scopeInvariant with ' + name;

		return formatErrorForGraphQL(internal(version, errorMessage));
	}

	return function scopeInvariantResolver(root, args, ctx, info) {
		let req = ctx && ctx.req;
		let server = ctx && ctx.server;
		let serverEnv = server && server.env;

		// If authorization is disabled, just bail now
		if (serverEnv && !serverEnv.AUTHENTICATION) {
			return resolver(root, args, ctx, info);
		}

		// NOTE: If you do not want graphiql to work when auth is enabled
		// just delete this section below. If we are hitting a graphiql endpoint,
		// this will bail, check the env as well to make sure we are not in prod
		if (
			serverEnv &&
			!serverEnv.IS_PRODUCTION &&
			/\$graphiql$/.test(req.baseUrl)
		) {
			return resolver(root, args, ctx, info);
		}

		let expectedScopes = allowedScopes(name, action);
		let userScopes = parseScopes(req && req.user);

		// Check if any of the expected scopes are present in the actual scopes
		let hasSufficientScope = expectedScopes.some(
			validScope => userScopes.indexOf(validScope) > -1,
		);

		// If not, throw an insufficientScope error
		if (!hasSufficientScope) {
			let errorMessage = `You do not have sufficient scope for ${action} `;
			errorMessage += `access on this ${name} resource.`;

			return formatErrorForGraphQL(insufficientScope(version, errorMessage));
		}
		// We have passed scope and context checks, pass the request off
		// to the actual resolver now
		return resolver(root, args, ctx, info);
	};
}

module.exports = {
	scopeInvariant,
};
