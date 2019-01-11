const {
	ImagingObjectSelectionCreateMutation,
	ImagingObjectSelectionUpdateMutation,
	ImagingObjectSelectionRemoveMutation,
} = require('./mutation');

const {
	ImagingObjectSelectionQuery,
	ImagingObjectSelectionListQuery,
	ImagingObjectSelectionInstanceQuery,
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
		ImagingObjectSelection: ImagingObjectSelectionQuery,
		ImagingObjectSelectionList: ImagingObjectSelectionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ImagingObjectSelectionCreate: ImagingObjectSelectionCreateMutation,
		ImagingObjectSelectionUpdate: ImagingObjectSelectionUpdateMutation,
		ImagingObjectSelectionRemove: ImagingObjectSelectionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ImagingObjectSelection',
		path: '/1_0_2/ImagingObjectSelection/:id',
		query: ImagingObjectSelectionInstanceQuery,
	},
};
