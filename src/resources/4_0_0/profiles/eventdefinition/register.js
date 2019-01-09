const {
	EventDefinitionCreateMutation,
	EventDefinitionUpdateMutation,
	EventDefinitionRemoveMutation,
} = require('./mutation');

const {
	EventDefinitionQuery,
	EventDefinitionListQuery,
	EventDefinitionInstanceQuery,
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
		EventDefinition: EventDefinitionQuery,
		EventDefinitionList: EventDefinitionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EventDefinitionCreate: EventDefinitionCreateMutation,
		EventDefinitionUpdate: EventDefinitionUpdateMutation,
		EventDefinitionRemove: EventDefinitionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'EventDefinition',
		path: '/4_0_0/EventDefinition/:id',
		query: EventDefinitionInstanceQuery,
	},
};
