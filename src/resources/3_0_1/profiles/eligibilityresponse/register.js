const {
	EligibilityResponseCreateMutation,
	EligibilityResponseUpdateMutation,
	EligibilityResponseRemoveMutation,
} = require('./mutation');

const {
	EligibilityResponseQuery,
	EligibilityResponseListQuery,
	EligibilityResponseInstanceQuery,
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
		EligibilityResponse: EligibilityResponseQuery,
		EligibilityResponseList: EligibilityResponseListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EligibilityResponseCreate: EligibilityResponseCreateMutation,
		EligibilityResponseUpdate: EligibilityResponseUpdateMutation,
		EligibilityResponseRemove: EligibilityResponseRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'EligibilityResponse',
		path: '/3_0_1/EligibilityResponse/:id',
		query: EligibilityResponseInstanceQuery,
	},
};
