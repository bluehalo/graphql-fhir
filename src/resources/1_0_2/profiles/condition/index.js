const {
	ConditionQuery,
	ConditionListQuery,
	ConditionInstanceQuery,
} = require('./query');

const {
	ConditionCreateMutation,
	ConditionUpdateMutation,
	ConditionDeleteMutation,
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
		Condition: ConditionQuery,
		ConditionList: ConditionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ConditionCreate: ConditionCreateMutation,
		ConditionUpdate: ConditionUpdateMutation,
		ConditionDelete: ConditionDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'Condition',
		path: '/1_0_2/Condition/:id',
		query: ConditionInstanceQuery,
	},
};
