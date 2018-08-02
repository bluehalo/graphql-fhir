const {
	CompositionQuery,
	CompositionListQuery,
	CompositionInstanceQuery
} = require('./query');

const {
	CompositionCreateMutation,
	CompositionUpdateMutation,
	CompositionDeleteMutation
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
		Composition: CompositionQuery,
		CompositionList: CompositionListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		CompositionCreate: CompositionCreateMutation,
		CompositionUpdate: CompositionUpdateMutation,
		CompositionDelete: CompositionDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Composition',
		path: '/3_0_1/Composition/:id',
		query: CompositionInstanceQuery
	}
};
