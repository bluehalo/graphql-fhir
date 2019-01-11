const {
	RiskAssessmentCreateMutation,
	RiskAssessmentUpdateMutation,
	RiskAssessmentRemoveMutation,
} = require('./mutation');

const {
	RiskAssessmentQuery,
	RiskAssessmentListQuery,
	RiskAssessmentInstanceQuery,
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
		RiskAssessment: RiskAssessmentQuery,
		RiskAssessmentList: RiskAssessmentListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		RiskAssessmentCreate: RiskAssessmentCreateMutation,
		RiskAssessmentUpdate: RiskAssessmentUpdateMutation,
		RiskAssessmentRemove: RiskAssessmentRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'RiskAssessment',
		path: '/4_0_0/RiskAssessment/:id',
		query: RiskAssessmentInstanceQuery,
	},
};
