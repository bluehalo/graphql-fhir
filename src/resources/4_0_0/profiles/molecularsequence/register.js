const {
	MolecularSequenceCreateMutation,
	MolecularSequenceUpdateMutation,
	MolecularSequenceRemoveMutation,
} = require('./mutation');

const {
	MolecularSequenceQuery,
	MolecularSequenceListQuery,
	MolecularSequenceInstanceQuery,
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
		MolecularSequence: MolecularSequenceQuery,
		MolecularSequenceList: MolecularSequenceListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MolecularSequenceCreate: MolecularSequenceCreateMutation,
		MolecularSequenceUpdate: MolecularSequenceUpdateMutation,
		MolecularSequenceRemove: MolecularSequenceRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MolecularSequence',
		path: '/4_0_0/MolecularSequence/:id',
		query: MolecularSequenceInstanceQuery,
	},
};
