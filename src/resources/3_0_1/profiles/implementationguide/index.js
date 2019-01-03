const {
	ImplementationGuideQuery,
	ImplementationGuideListQuery,
	ImplementationGuideInstanceQuery,
} = require('./query');

const {
	ImplementationGuideCreateMutation,
	ImplementationGuideUpdateMutation,
	ImplementationGuideDeleteMutation,
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
		ImplementationGuide: ImplementationGuideQuery,
		ImplementationGuideList: ImplementationGuideListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ImplementationGuideCreate: ImplementationGuideCreateMutation,
		ImplementationGuideUpdate: ImplementationGuideUpdateMutation,
		ImplementationGuideDelete: ImplementationGuideDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'ImplementationGuide',
		path: '/3_0_1/ImplementationGuide/:id',
		query: ImplementationGuideInstanceQuery,
	},
};
