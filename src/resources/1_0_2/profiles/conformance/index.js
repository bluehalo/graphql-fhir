const {
	ConformanceQuery,
	ConformanceListQuery,
	ConformanceInstanceQuery
} = require('./query');

const {
	ConformanceCreateMutation,
	ConformanceUpdateMutation,
	ConformanceDeleteMutation
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
		Conformance: ConformanceQuery,
		ConformanceList: ConformanceListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		ConformanceCreate: ConformanceCreateMutation,
		ConformanceUpdate: ConformanceUpdateMutation,
		ConformanceDelete: ConformanceDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Conformance',
		path: '/3_0_1/Conformance/:id',
		query: ConformanceInstanceQuery
	}
};
