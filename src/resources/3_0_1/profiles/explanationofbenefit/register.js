const {
	ExplanationOfBenefitCreateMutation,
	ExplanationOfBenefitUpdateMutation,
	ExplanationOfBenefitRemoveMutation,
} = require('./mutation');

const {
	ExplanationOfBenefitQuery,
	ExplanationOfBenefitListQuery,
	ExplanationOfBenefitInstanceQuery,
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
		ExplanationOfBenefit: ExplanationOfBenefitQuery,
		ExplanationOfBenefitList: ExplanationOfBenefitListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ExplanationOfBenefitCreate: ExplanationOfBenefitCreateMutation,
		ExplanationOfBenefitUpdate: ExplanationOfBenefitUpdateMutation,
		ExplanationOfBenefitRemove: ExplanationOfBenefitRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ExplanationOfBenefit',
		path: '/3_0_1/ExplanationOfBenefit/:id',
		query: ExplanationOfBenefitInstanceQuery,
	},
};
