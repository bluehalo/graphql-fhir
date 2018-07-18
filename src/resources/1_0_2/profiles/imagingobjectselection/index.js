const {
	ImagingObjectSelectionQuery,
	ImagingObjectSelectionListQuery,
	ImagingObjectSelectionInstanceQuery
} = require('./query');

const {
	ImagingObjectSelectionCreateMutation,
	ImagingObjectSelectionUpdateMutation,
	ImagingObjectSelectionDeleteMutation
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
		ImagingObjectSelection: ImagingObjectSelectionQuery,
		ImagingObjectSelectionList: ImagingObjectSelectionListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		ImagingObjectSelectionCreate: ImagingObjectSelectionCreateMutation,
		ImagingObjectSelectionUpdate: ImagingObjectSelectionUpdateMutation,
		ImagingObjectSelectionDelete: ImagingObjectSelectionDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'ImagingObjectSelection',
		path: '/3_0_1/ImagingObjectSelection/:id',
		query: ImagingObjectSelectionInstanceQuery
	}
};
