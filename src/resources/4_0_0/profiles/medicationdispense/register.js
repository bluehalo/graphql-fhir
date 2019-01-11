const {
	MedicationDispenseCreateMutation,
	MedicationDispenseUpdateMutation,
	MedicationDispenseRemoveMutation,
} = require('./mutation');

const {
	MedicationDispenseQuery,
	MedicationDispenseListQuery,
	MedicationDispenseInstanceQuery,
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
		MedicationDispense: MedicationDispenseQuery,
		MedicationDispenseList: MedicationDispenseListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicationDispenseCreate: MedicationDispenseCreateMutation,
		MedicationDispenseUpdate: MedicationDispenseUpdateMutation,
		MedicationDispenseRemove: MedicationDispenseRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MedicationDispense',
		path: '/4_0_0/MedicationDispense/:id',
		query: MedicationDispenseInstanceQuery,
	},
};
