const {
	CoverageCreateMutation,
	CoverageUpdateMutation,
	CoverageRemoveMutation,
} = require('./mutation');

const {
	CoverageQuery,
	CoverageListQuery,
	CoverageInstanceQuery,
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
		Coverage: CoverageQuery,
		CoverageList: CoverageListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		CoverageCreate: CoverageCreateMutation,
		CoverageUpdate: CoverageUpdateMutation,
		CoverageRemove: CoverageRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Coverage',
		path: '/1_0_2/Coverage/:id',
		query: CoverageInstanceQuery,
	},
};
