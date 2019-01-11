const {
	ConformanceCreateMutation,
	ConformanceUpdateMutation,
	ConformanceRemoveMutation,
} = require('./mutation');

const {
	ConformanceQuery,
	ConformanceListQuery,
	ConformanceInstanceQuery,
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
		Conformance: ConformanceQuery,
		ConformanceList: ConformanceListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ConformanceCreate: ConformanceCreateMutation,
		ConformanceUpdate: ConformanceUpdateMutation,
		ConformanceRemove: ConformanceRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Conformance',
		path: '/1_0_2/Conformance/:id',
		query: ConformanceInstanceQuery,
	},
};
