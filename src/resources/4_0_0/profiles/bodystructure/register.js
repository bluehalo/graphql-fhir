const {
	BodyStructureCreateMutation,
	BodyStructureUpdateMutation,
	BodyStructureRemoveMutation,
} = require('./mutation');

const {
	BodyStructureQuery,
	BodyStructureListQuery,
	BodyStructureInstanceQuery,
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
		BodyStructure: BodyStructureQuery,
		BodyStructureList: BodyStructureListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		BodyStructureCreate: BodyStructureCreateMutation,
		BodyStructureUpdate: BodyStructureUpdateMutation,
		BodyStructureRemove: BodyStructureRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'BodyStructure',
		path: '/4_0_0/BodyStructure/:id',
		query: BodyStructureInstanceQuery,
	},
};
