const {
	StructureDefinitionCreateMutation,
	StructureDefinitionUpdateMutation,
	StructureDefinitionRemoveMutation,
} = require('./mutation');

const {
	StructureDefinitionQuery,
	StructureDefinitionListQuery,
	StructureDefinitionInstanceQuery,
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
		StructureDefinition: StructureDefinitionQuery,
		StructureDefinitionList: StructureDefinitionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		StructureDefinitionCreate: StructureDefinitionCreateMutation,
		StructureDefinitionUpdate: StructureDefinitionUpdateMutation,
		StructureDefinitionRemove: StructureDefinitionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'StructureDefinition',
		path: '/4_0_0/StructureDefinition/:id',
		query: StructureDefinitionInstanceQuery,
	},
};
