const errorUtils = require('../utils/error.utils');
const parser = require('graphql/language/parser');

/**
 * @name exports
 * @summary Middleware function for getting graphql info and validating scopes
 * @example app.use('/some/router', authenticationMiddleware(server), expressGraphql({ ... }));
 * NOTE: This middleware allows for validation in a single point, it is up to the implementer to
 * decide whether or not they handle things here or they want to handle them in a resolver. Either
 * are a valid solution as long as errors are reported in the correct format.
 */
module.exports = function authenticationMiddleware (server, version) {
	// return a valid middleware function
	return (req, res, next) => {
		let args = req.method === 'GET'
			? req.query.query
			: req.body.query;

		// Add a check for validation config from the server, is there is no auth
		// then we should just call next and skip all the rest
		// TODO: Check for auth config from the server

		// TODO: Validate the authenticated user can use access this resource
		// if a reqource_id is present
		let resource_id = req.params.id;

		// Parse the documentNode from the graphql request if we have args
		if (args) {
			let documentNode = parser.parse(args);
			// Grab the definitions from the document node
			let definitions = documentNode.definitions;
			// Iterate over each definition and validate the selection set
			definitions.forEach(definition => {
				// TODO: Inspect the AST to determine which fields they are requesting
				// and perform validation on those fields and the scopes the user has
			});
		}
		// NOTE Example of throwing an error as an observation outcome
		// next(errorUtils.internal(version));
		next();
	};
};
