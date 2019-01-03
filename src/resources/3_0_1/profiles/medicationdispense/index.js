const {
	MedicationDispenseQuery,
	MedicationDispenseListQuery,
	MedicationDispenseInstanceQuery,
} = require('./query');

const {
	MedicationDispenseCreateMutation,
	MedicationDispenseUpdateMutation,
	MedicationDispenseDeleteMutation,
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
		MedicationDispenseDelete: MedicationDispenseDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'MedicationDispense',
		path: '/3_0_1/MedicationDispense/:id',
		query: MedicationDispenseInstanceQuery,
	},
};
