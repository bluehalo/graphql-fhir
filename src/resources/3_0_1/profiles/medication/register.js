const {
	MedicationCreateMutation,
	MedicationUpdateMutation,
	MedicationRemoveMutation,
} = require('./mutation');

const {
	MedicationQuery,
	MedicationListQuery,
	MedicationInstanceQuery,
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
		Medication: MedicationQuery,
		MedicationList: MedicationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicationCreate: MedicationCreateMutation,
		MedicationUpdate: MedicationUpdateMutation,
		MedicationRemove: MedicationRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Medication',
		path: '/3_0_1/Medication/:id',
		query: MedicationInstanceQuery,
	},
};
