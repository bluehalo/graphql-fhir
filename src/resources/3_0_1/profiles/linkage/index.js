const {
	LinkageQuery,
	LinkageListQuery,
	LinkageInstanceQuery,
} = require('./query');

const {
	LinkageCreateMutation,
	LinkageUpdateMutation,
	LinkageDeleteMutation,
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
		Linkage: LinkageQuery,
		LinkageList: LinkageListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		LinkageCreate: LinkageCreateMutation,
		LinkageUpdate: LinkageUpdateMutation,
		LinkageDelete: LinkageDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'Linkage',
		path: '/3_0_1/Linkage/:id',
		query: LinkageInstanceQuery,
	},
};
