const {
	ImmunizationRecommendationCreateMutation,
	ImmunizationRecommendationUpdateMutation,
	ImmunizationRecommendationRemoveMutation,
} = require('./mutation');

const {
	ImmunizationRecommendationQuery,
	ImmunizationRecommendationListQuery,
	ImmunizationRecommendationInstanceQuery,
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
		ImmunizationRecommendation: ImmunizationRecommendationQuery,
		ImmunizationRecommendationList: ImmunizationRecommendationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ImmunizationRecommendationCreate: ImmunizationRecommendationCreateMutation,
		ImmunizationRecommendationUpdate: ImmunizationRecommendationUpdateMutation,
		ImmunizationRecommendationRemove: ImmunizationRecommendationRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ImmunizationRecommendation',
		path: '/4_0_0/ImmunizationRecommendation/:id',
		query: ImmunizationRecommendationInstanceQuery,
	},
};
