const {
	ResearchDefinitionCreateMutation,
	ResearchDefinitionUpdateMutation,
	ResearchDefinitionRemoveMutation,
} = require('./mutation');

const {
	ResearchDefinitionQuery,
	ResearchDefinitionListQuery,
	ResearchDefinitionInstanceQuery,
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
		ResearchDefinition: ResearchDefinitionQuery,
		ResearchDefinitionList: ResearchDefinitionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ResearchDefinitionCreate: ResearchDefinitionCreateMutation,
		ResearchDefinitionUpdate: ResearchDefinitionUpdateMutation,
		ResearchDefinitionRemove: ResearchDefinitionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ResearchDefinition',
		path: '/4_0_0/ResearchDefinition/:id',
		query: ResearchDefinitionInstanceQuery,
	},
};
