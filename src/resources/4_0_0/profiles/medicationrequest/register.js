const {
	MedicationRequestCreateMutation,
	MedicationRequestUpdateMutation,
	MedicationRequestRemoveMutation,
} = require('./mutation');

const {
	MedicationRequestQuery,
	MedicationRequestListQuery,
	MedicationRequestInstanceQuery,
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
		MedicationRequest: MedicationRequestQuery,
		MedicationRequestList: MedicationRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicationRequestCreate: MedicationRequestCreateMutation,
		MedicationRequestUpdate: MedicationRequestUpdateMutation,
		MedicationRequestRemove: MedicationRequestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MedicationRequest',
		path: '/4_0_0/MedicationRequest/:id',
		query: MedicationRequestInstanceQuery,
	},
};
