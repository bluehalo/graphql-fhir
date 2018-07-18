const {
	OperationDefinitionQuery,
	OperationDefinitionListQuery,
	OperationDefinitionInstanceQuery
} = require('./query');

const {
	OperationDefinitionCreateMutation,
	OperationDefinitionUpdateMutation,
	OperationDefinitionDeleteMutation
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
		OperationDefinition: OperationDefinitionQuery,
		OperationDefinitionList: OperationDefinitionListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		OperationDefinitionCreate: OperationDefinitionCreateMutation,
		OperationDefinitionUpdate: OperationDefinitionUpdateMutation,
		OperationDefinitionDelete: OperationDefinitionDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'OperationDefinition',
		path: '/3_0_1/OperationDefinition/:id',
		query: OperationDefinitionInstanceQuery
	}
};
