const { GroupQuery, GroupListQuery, GroupInstanceQuery } = require('./query');

const {
	GroupCreateMutation,
	GroupUpdateMutation,
	GroupDeleteMutation,
} = require('./mutation');

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
		Group: GroupQuery,
		GroupList: GroupListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		GroupCreate: GroupCreateMutation,
		GroupUpdate: GroupUpdateMutation,
		GroupDelete: GroupDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'Group',
		path: '/3_0_1/Group/:id',
		query: GroupInstanceQuery,
	},
};
