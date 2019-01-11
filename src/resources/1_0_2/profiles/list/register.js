const {
	ListCreateMutation,
	ListUpdateMutation,
	ListRemoveMutation,
} = require('./mutation');

const { ListQuery, ListListQuery, ListInstanceQuery } = require('./query');

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
		List: ListQuery,
		ListList: ListListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ListCreate: ListCreateMutation,
		ListUpdate: ListUpdateMutation,
		ListRemove: ListRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'List',
		path: '/1_0_2/List/:id',
		query: ListInstanceQuery,
	},
};
