const {
	CoverageEligibilityResponseCreateMutation,
	CoverageEligibilityResponseUpdateMutation,
	CoverageEligibilityResponseRemoveMutation,
} = require('./mutation');

const {
	CoverageEligibilityResponseQuery,
	CoverageEligibilityResponseListQuery,
	CoverageEligibilityResponseInstanceQuery,
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
		CoverageEligibilityResponse: CoverageEligibilityResponseQuery,
		CoverageEligibilityResponseList: CoverageEligibilityResponseListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		CoverageEligibilityResponseCreate: CoverageEligibilityResponseCreateMutation,
		CoverageEligibilityResponseUpdate: CoverageEligibilityResponseUpdateMutation,
		CoverageEligibilityResponseRemove: CoverageEligibilityResponseRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'CoverageEligibilityResponse',
		path: '/4_0_0/CoverageEligibilityResponse/:id',
		query: CoverageEligibilityResponseInstanceQuery,
	},
};
