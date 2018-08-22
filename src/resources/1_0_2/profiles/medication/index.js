const {
	MedicationQuery,
	MedicationListQuery,
	MedicationInstanceQuery
} = require('./query');

const {
	MedicationCreateMutation,
	MedicationUpdateMutation,
	MedicationDeleteMutation
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
		Medication: MedicationQuery,
		MedicationList: MedicationListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		MedicationCreate: MedicationCreateMutation,
		MedicationUpdate: MedicationUpdateMutation,
		MedicationDelete: MedicationDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Medication',
		path: '/1_0_2/Medication/:id',
		query: MedicationInstanceQuery
	}
};
