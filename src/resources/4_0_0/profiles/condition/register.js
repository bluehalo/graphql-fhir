const {
	ConditionCreateMutation,
	ConditionUpdateMutation,
	ConditionRemoveMutation,
} = require('./mutation');

const {
	ConditionQuery,
	ConditionListQuery,
	ConditionInstanceQuery,
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
		ConditionRemove: ConditionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Condition',
		path: '/4_0_0/Condition/:id',
		query: ConditionInstanceQuery,
	},
};
