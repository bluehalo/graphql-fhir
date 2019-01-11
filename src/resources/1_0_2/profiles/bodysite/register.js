const {
	BodySiteCreateMutation,
	BodySiteUpdateMutation,
	BodySiteRemoveMutation,
} = require('./mutation');

const {
	BodySiteQuery,
	BodySiteListQuery,
	BodySiteInstanceQuery,
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
		BodySite: BodySiteQuery,
		BodySiteList: BodySiteListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		BodySiteCreate: BodySiteCreateMutation,
		BodySiteUpdate: BodySiteUpdateMutation,
		BodySiteRemove: BodySiteRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'BodySite',
		path: '/1_0_2/BodySite/:id',
		query: BodySiteInstanceQuery,
	},
};
