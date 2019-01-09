const {
	OperationDefinitionCreateMutation,
	OperationDefinitionUpdateMutation,
	OperationDefinitionRemoveMutation,
} = require('./mutation');

const {
	OperationDefinitionQuery,
	OperationDefinitionListQuery,
	OperationDefinitionInstanceQuery,
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
		OperationDefinition: OperationDefinitionQuery,
		OperationDefinitionList: OperationDefinitionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		OperationDefinitionCreate: OperationDefinitionCreateMutation,
		OperationDefinitionUpdate: OperationDefinitionUpdateMutation,
		OperationDefinitionRemove: OperationDefinitionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'OperationDefinition',
		path: '/1_0_2/OperationDefinition/:id',
		query: OperationDefinitionInstanceQuery,
	},
};
