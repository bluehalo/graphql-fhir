const {
	GraphDefinitionQuery,
	GraphDefinitionListQuery,
	GraphDefinitionInstanceQuery
} = require('./query');

const {
	GraphDefinitionCreateMutation,
	GraphDefinitionUpdateMutation,
	GraphDefinitionDeleteMutation
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
		GraphDefinition: GraphDefinitionQuery,
		GraphDefinitionList: GraphDefinitionListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		GraphDefinitionCreate: GraphDefinitionCreateMutation,
		GraphDefinitionUpdate: GraphDefinitionUpdateMutation,
		GraphDefinitionDelete: GraphDefinitionDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'GraphDefinition',
		path: '/3_0_1/GraphDefinition/:id',
		query: GraphDefinitionInstanceQuery
	}
};
