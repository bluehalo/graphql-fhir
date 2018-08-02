const {
	LibraryQuery,
	LibraryListQuery,
	LibraryInstanceQuery
} = require('./query');

const {
	LibraryCreateMutation,
	LibraryUpdateMutation,
	LibraryDeleteMutation
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
		Library: LibraryQuery,
		LibraryList: LibraryListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		LibraryCreate: LibraryCreateMutation,
		LibraryUpdate: LibraryUpdateMutation,
		LibraryDelete: LibraryDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Library',
		path: '/3_0_1/Library/:id',
		query: LibraryInstanceQuery
	}
};
