const {
	ImmunizationRecommendationQuery,
	ImmunizationRecommendationListQuery,
	ImmunizationRecommendationInstanceQuery,
} = require('./query');

const {
	ImmunizationRecommendationCreateMutation,
	ImmunizationRecommendationUpdateMutation,
	ImmunizationRecommendationDeleteMutation,
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
		ImmunizationRecommendationDelete: ImmunizationRecommendationDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'ImmunizationRecommendation',
		path: '/1_0_2/ImmunizationRecommendation/:id',
		query: ImmunizationRecommendationInstanceQuery,
	},
};
