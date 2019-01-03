const {
	DataElementQuery,
	DataElementListQuery,
	DataElementInstanceQuery,
} = require('./query');

const {
	DataElementCreateMutation,
	DataElementUpdateMutation,
	DataElementDeleteMutation,
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
		DataElement: DataElementQuery,
		DataElementList: DataElementListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DataElementCreate: DataElementCreateMutation,
		DataElementUpdate: DataElementUpdateMutation,
		DataElementDelete: DataElementDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'DataElement',
		path: '/1_0_2/DataElement/:id',
		query: DataElementInstanceQuery,
	},
};
