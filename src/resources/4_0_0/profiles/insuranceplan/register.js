const {
	InsurancePlanCreateMutation,
	InsurancePlanUpdateMutation,
	InsurancePlanRemoveMutation,
} = require('./mutation');

const {
	InsurancePlanQuery,
	InsurancePlanListQuery,
	InsurancePlanInstanceQuery,
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
		InsurancePlan: InsurancePlanQuery,
		InsurancePlanList: InsurancePlanListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		InsurancePlanCreate: InsurancePlanCreateMutation,
		InsurancePlanUpdate: InsurancePlanUpdateMutation,
		InsurancePlanRemove: InsurancePlanRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'InsurancePlan',
		path: '/4_0_0/InsurancePlan/:id',
		query: InsurancePlanInstanceQuery,
	},
};
