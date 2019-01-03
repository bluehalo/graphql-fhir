const {
	MedicationStatementQuery,
	MedicationStatementListQuery,
	MedicationStatementInstanceQuery,
} = require('./query');

const {
	MedicationStatementCreateMutation,
	MedicationStatementUpdateMutation,
	MedicationStatementDeleteMutation,
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
		MedicationStatement: MedicationStatementQuery,
		MedicationStatementList: MedicationStatementListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicationStatementCreate: MedicationStatementCreateMutation,
		MedicationStatementUpdate: MedicationStatementUpdateMutation,
		MedicationStatementDelete: MedicationStatementDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'MedicationStatement',
		path: '/1_0_2/MedicationStatement/:id',
		query: MedicationStatementInstanceQuery,
	},
};
