const {
	StructureMapCreateMutation,
	StructureMapUpdateMutation,
	StructureMapRemoveMutation,
} = require('./mutation');

const {
	StructureMapQuery,
	StructureMapListQuery,
	StructureMapInstanceQuery,
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
		StructureMap: StructureMapQuery,
		StructureMapList: StructureMapListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		StructureMapCreate: StructureMapCreateMutation,
		StructureMapUpdate: StructureMapUpdateMutation,
		StructureMapRemove: StructureMapRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'StructureMap',
		path: '/4_0_0/StructureMap/:id',
		query: StructureMapInstanceQuery,
	},
};
