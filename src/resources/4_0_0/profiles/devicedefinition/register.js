const {
	DeviceDefinitionCreateMutation,
	DeviceDefinitionUpdateMutation,
	DeviceDefinitionRemoveMutation,
} = require('./mutation');

const {
	DeviceDefinitionQuery,
	DeviceDefinitionListQuery,
	DeviceDefinitionInstanceQuery,
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
		DeviceDefinition: DeviceDefinitionQuery,
		DeviceDefinitionList: DeviceDefinitionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DeviceDefinitionCreate: DeviceDefinitionCreateMutation,
		DeviceDefinitionUpdate: DeviceDefinitionUpdateMutation,
		DeviceDefinitionRemove: DeviceDefinitionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'DeviceDefinition',
		path: '/4_0_0/DeviceDefinition/:id',
		query: DeviceDefinitionInstanceQuery,
	},
};
