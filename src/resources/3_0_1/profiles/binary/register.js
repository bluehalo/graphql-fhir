const {
	BinaryCreateMutation,
	BinaryUpdateMutation,
	BinaryRemoveMutation,
} = require('./mutation');

const {
	BinaryQuery,
	BinaryListQuery,
	BinaryInstanceQuery,
} = require('./query');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	 * Define Query Schema's here
	 * Each profile will need to define the two queries it supports
	 * and these keys must be unique across the entire application, like routes
	 */
	query: {
		Binary: BinaryQuery,
		BinaryList: BinaryListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		BinaryCreate: BinaryCreateMutation,
		BinaryUpdate: BinaryUpdateMutation,
		BinaryRemove: BinaryRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Binary',
		path: '/3_0_1/Binary/:id',
		query: BinaryInstanceQuery,
	},
};
