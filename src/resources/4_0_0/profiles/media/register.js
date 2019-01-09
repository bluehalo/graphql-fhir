const {
	MediaCreateMutation,
	MediaUpdateMutation,
	MediaRemoveMutation,
} = require('./mutation');

const { MediaQuery, MediaListQuery, MediaInstanceQuery } = require('./query');

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
		Media: MediaQuery,
		MediaList: MediaListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MediaCreate: MediaCreateMutation,
		MediaUpdate: MediaUpdateMutation,
		MediaRemove: MediaRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Media',
		path: '/4_0_0/Media/:id',
		query: MediaInstanceQuery,
	},
};
