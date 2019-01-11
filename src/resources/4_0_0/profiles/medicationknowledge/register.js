const {
	MedicationKnowledgeCreateMutation,
	MedicationKnowledgeUpdateMutation,
	MedicationKnowledgeRemoveMutation,
} = require('./mutation');

const {
	MedicationKnowledgeQuery,
	MedicationKnowledgeListQuery,
	MedicationKnowledgeInstanceQuery,
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
		MedicationKnowledge: MedicationKnowledgeQuery,
		MedicationKnowledgeList: MedicationKnowledgeListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicationKnowledgeCreate: MedicationKnowledgeCreateMutation,
		MedicationKnowledgeUpdate: MedicationKnowledgeUpdateMutation,
		MedicationKnowledgeRemove: MedicationKnowledgeRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MedicationKnowledge',
		path: '/4_0_0/MedicationKnowledge/:id',
		query: MedicationKnowledgeInstanceQuery,
	},
};
