const {
	MedicinalProductInteractionCreateMutation,
	MedicinalProductInteractionUpdateMutation,
	MedicinalProductInteractionRemoveMutation,
} = require('./mutation');

const {
	MedicinalProductInteractionQuery,
	MedicinalProductInteractionListQuery,
	MedicinalProductInteractionInstanceQuery,
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
		MedicinalProductInteraction: MedicinalProductInteractionQuery,
		MedicinalProductInteractionList: MedicinalProductInteractionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicinalProductInteractionCreate: MedicinalProductInteractionCreateMutation,
		MedicinalProductInteractionUpdate: MedicinalProductInteractionUpdateMutation,
		MedicinalProductInteractionRemove: MedicinalProductInteractionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MedicinalProductInteraction',
		path: '/4_0_0/MedicinalProductInteraction/:id',
		query: MedicinalProductInteractionInstanceQuery,
	},
};
