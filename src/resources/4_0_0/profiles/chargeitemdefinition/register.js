const {
	ChargeItemDefinitionCreateMutation,
	ChargeItemDefinitionUpdateMutation,
	ChargeItemDefinitionRemoveMutation,
} = require('./mutation');

const {
	ChargeItemDefinitionQuery,
	ChargeItemDefinitionListQuery,
	ChargeItemDefinitionInstanceQuery,
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
		ChargeItemDefinition: ChargeItemDefinitionQuery,
		ChargeItemDefinitionList: ChargeItemDefinitionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ChargeItemDefinitionCreate: ChargeItemDefinitionCreateMutation,
		ChargeItemDefinitionUpdate: ChargeItemDefinitionUpdateMutation,
		ChargeItemDefinitionRemove: ChargeItemDefinitionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ChargeItemDefinition',
		path: '/4_0_0/ChargeItemDefinition/:id',
		query: ChargeItemDefinitionInstanceQuery,
	},
};
