const {
	ResearchStudyCreateMutation,
	ResearchStudyUpdateMutation,
	ResearchStudyRemoveMutation,
} = require('./mutation');

const {
	ResearchStudyQuery,
	ResearchStudyListQuery,
	ResearchStudyInstanceQuery,
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
		ResearchStudy: ResearchStudyQuery,
		ResearchStudyList: ResearchStudyListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ResearchStudyCreate: ResearchStudyCreateMutation,
		ResearchStudyUpdate: ResearchStudyUpdateMutation,
		ResearchStudyRemove: ResearchStudyRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ResearchStudy',
		path: '/4_0_0/ResearchStudy/:id',
		query: ResearchStudyInstanceQuery,
	},
};
