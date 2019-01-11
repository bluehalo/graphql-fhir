const {
	QuestionnaireResponseCreateMutation,
	QuestionnaireResponseUpdateMutation,
	QuestionnaireResponseRemoveMutation,
} = require('./mutation');

const {
	QuestionnaireResponseQuery,
	QuestionnaireResponseListQuery,
	QuestionnaireResponseInstanceQuery,
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
		QuestionnaireResponse: QuestionnaireResponseQuery,
		QuestionnaireResponseList: QuestionnaireResponseListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		QuestionnaireResponseCreate: QuestionnaireResponseCreateMutation,
		QuestionnaireResponseUpdate: QuestionnaireResponseUpdateMutation,
		QuestionnaireResponseRemove: QuestionnaireResponseRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'QuestionnaireResponse',
		path: '/4_0_0/QuestionnaireResponse/:id',
		query: QuestionnaireResponseInstanceQuery,
	},
};
