const {
	RequestGroupCreateMutation,
	RequestGroupUpdateMutation,
	RequestGroupRemoveMutation,
} = require('./mutation');

const {
	RequestGroupQuery,
	RequestGroupListQuery,
	RequestGroupInstanceQuery,
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
		RequestGroup: RequestGroupQuery,
		RequestGroupList: RequestGroupListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		RequestGroupCreate: RequestGroupCreateMutation,
		RequestGroupUpdate: RequestGroupUpdateMutation,
		RequestGroupRemove: RequestGroupRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'RequestGroup',
		path: '/3_0_1/RequestGroup/:id',
		query: RequestGroupInstanceQuery,
	},
};
