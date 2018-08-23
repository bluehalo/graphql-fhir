const {
	CoverageQuery,
	CoverageListQuery,
	CoverageInstanceQuery
} = require('./query');

const {
	CoverageCreateMutation,
	CoverageUpdateMutation,
	CoverageDeleteMutation
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
		Coverage: CoverageQuery,
		CoverageList: CoverageListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		CoverageCreate: CoverageCreateMutation,
		CoverageUpdate: CoverageUpdateMutation,
		CoverageDelete: CoverageDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Coverage',
		path: '/3_0_1/Coverage/:id',
		query: CoverageInstanceQuery
	}
};
