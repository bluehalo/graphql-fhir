const {
	DocumentManifestQuery,
	DocumentManifestListQuery,
	DocumentManifestInstanceQuery
} = require('./query');

const {
	DocumentManifestCreateMutation,
	DocumentManifestUpdateMutation,
	DocumentManifestDeleteMutation
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
		DocumentManifest: DocumentManifestQuery,
		DocumentManifestList: DocumentManifestListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		DocumentManifestCreate: DocumentManifestCreateMutation,
		DocumentManifestUpdate: DocumentManifestUpdateMutation,
		DocumentManifestDelete: DocumentManifestDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'DocumentManifest',
		path: '/3_0_1/DocumentManifest/:id',
		query: DocumentManifestInstanceQuery
	}
};
