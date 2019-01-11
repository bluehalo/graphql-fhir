const {
	EligibilityRequestCreateMutation,
	EligibilityRequestUpdateMutation,
	EligibilityRequestRemoveMutation,
} = require('./mutation');

const {
	EligibilityRequestQuery,
	EligibilityRequestListQuery,
	EligibilityRequestInstanceQuery,
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
		EligibilityRequest: EligibilityRequestQuery,
		EligibilityRequestList: EligibilityRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EligibilityRequestCreate: EligibilityRequestCreateMutation,
		EligibilityRequestUpdate: EligibilityRequestUpdateMutation,
		EligibilityRequestRemove: EligibilityRequestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'EligibilityRequest',
		path: '/3_0_1/EligibilityRequest/:id',
		query: EligibilityRequestInstanceQuery,
	},
};
