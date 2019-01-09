const {
	EncounterCreateMutation,
	EncounterUpdateMutation,
	EncounterRemoveMutation,
} = require('./mutation');

const {
	EncounterQuery,
	EncounterListQuery,
	EncounterInstanceQuery,
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
		Encounter: EncounterQuery,
		EncounterList: EncounterListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EncounterCreate: EncounterCreateMutation,
		EncounterUpdate: EncounterUpdateMutation,
		EncounterRemove: EncounterRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Encounter',
		path: '/3_0_1/Encounter/:id',
		query: EncounterInstanceQuery,
	},
};
