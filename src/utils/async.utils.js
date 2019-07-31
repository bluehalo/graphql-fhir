const { GraphQLError } = require('graphql');

/**
 * @name exports
 * @summary Wrapper for async/await error handling or non async resolvers
 * @param {promise|object} response
 * @return {array}
 */
module.exports = response => {
	// Promises
	if (response.then) {
		return response.then(data => [undefined, data]).catch(err => [err]);
	}
	// Non-async errors
	else if (response instanceof GraphQLError || response instanceof Error) {
		return [response, null];
	}
	// Standard response
	return [null, response];
};
