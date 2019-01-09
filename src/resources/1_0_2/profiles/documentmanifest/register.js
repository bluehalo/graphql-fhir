const {
	DocumentManifestCreateMutation,
	DocumentManifestUpdateMutation,
	DocumentManifestRemoveMutation,
} = require('./mutation');

const {
	DocumentManifestQuery,
	DocumentManifestListQuery,
	DocumentManifestInstanceQuery,
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
		DocumentManifest: DocumentManifestQuery,
		DocumentManifestList: DocumentManifestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DocumentManifestCreate: DocumentManifestCreateMutation,
		DocumentManifestUpdate: DocumentManifestUpdateMutation,
		DocumentManifestRemove: DocumentManifestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'DocumentManifest',
		path: '/1_0_2/DocumentManifest/:id',
		query: DocumentManifestInstanceQuery,
	},
};
