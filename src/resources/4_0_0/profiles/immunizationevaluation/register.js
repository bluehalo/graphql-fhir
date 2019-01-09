const {
	ImmunizationEvaluationCreateMutation,
	ImmunizationEvaluationUpdateMutation,
	ImmunizationEvaluationRemoveMutation,
} = require('./mutation');

const {
	ImmunizationEvaluationQuery,
	ImmunizationEvaluationListQuery,
	ImmunizationEvaluationInstanceQuery,
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
		ImmunizationEvaluation: ImmunizationEvaluationQuery,
		ImmunizationEvaluationList: ImmunizationEvaluationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ImmunizationEvaluationCreate: ImmunizationEvaluationCreateMutation,
		ImmunizationEvaluationUpdate: ImmunizationEvaluationUpdateMutation,
		ImmunizationEvaluationRemove: ImmunizationEvaluationRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ImmunizationEvaluation',
		path: '/4_0_0/ImmunizationEvaluation/:id',
		query: ImmunizationEvaluationInstanceQuery,
	},
};
