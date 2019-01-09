const {
	ResearchSubjectCreateMutation,
	ResearchSubjectUpdateMutation,
	ResearchSubjectRemoveMutation,
} = require('./mutation');

const {
	ResearchSubjectQuery,
	ResearchSubjectListQuery,
	ResearchSubjectInstanceQuery,
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
		ResearchSubject: ResearchSubjectQuery,
		ResearchSubjectList: ResearchSubjectListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ResearchSubjectCreate: ResearchSubjectCreateMutation,
		ResearchSubjectUpdate: ResearchSubjectUpdateMutation,
		ResearchSubjectRemove: ResearchSubjectRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ResearchSubject',
		path: '/4_0_0/ResearchSubject/:id',
		query: ResearchSubjectInstanceQuery,
	},
};
