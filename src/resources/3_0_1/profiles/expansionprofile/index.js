const {
	ExpansionProfileQuery,
	ExpansionProfileListQuery,
	ExpansionProfileInstanceQuery,
} = require('./query');

const {
	ExpansionProfileCreateMutation,
	ExpansionProfileUpdateMutation,
	ExpansionProfileDeleteMutation,
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
		ExpansionProfile: ExpansionProfileQuery,
		ExpansionProfileList: ExpansionProfileListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ExpansionProfileCreate: ExpansionProfileCreateMutation,
		ExpansionProfileUpdate: ExpansionProfileUpdateMutation,
		ExpansionProfileDelete: ExpansionProfileDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'ExpansionProfile',
		path: '/3_0_1/ExpansionProfile/:id',
		query: ExpansionProfileInstanceQuery,
	},
};
