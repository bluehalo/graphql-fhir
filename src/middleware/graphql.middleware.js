const { GraphQLSchema, graphql } = require('graphql');
const wrapper = require('../utils/async.utils');


/**
 * @name exports
 * @summary Middleware function for GraphQL Instance Queries
 */
module.exports = function GraphQLResourceInstanceQuery (options = {}) {
	let { server, version, instance } = options;

	return async function GraphQLResourceInstanceMiddleware (req, res, next) {
		let context = { req, res, server, version };
		// Unfortunately we cannot access the info object until we are in the field
		// resolver, if we ever need access to it, we may need to deoptimize this solution
		// Let's set that and root to empty objects for now
		let resource = instance.resolve({}, req.params, context, {});
		// If we have an error, forward it to the error handler
		// if (err) {
		// 	return next(err);
		// }
		// Setup our graphql query to format results
		let { query, variables, operationName } = req.method === 'GET' ? req.query : req.body;
		let schema = new GraphQLSchema({ query: instance.type });
		let [gqlErr, results] = await wrapper(
			graphql(schema, query, null, null, variables, operationName, (root, args, ctx, info) => {
				let source = root !== null ? root : resource;
				return source[info.fieldName];
			})
		);
		// If we have an error, forward it to the error handler
		if (gqlErr) {
			return next(gqlErr);
		}

		res.status(200).json(results);
	};
};
