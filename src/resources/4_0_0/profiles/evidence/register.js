const {
	EvidenceCreateMutation,
	EvidenceUpdateMutation,
	EvidenceRemoveMutation,
} = require('./mutation');

const {
	EvidenceQuery,
	EvidenceListQuery,
	EvidenceInstanceQuery,
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
		Evidence: EvidenceQuery,
		EvidenceList: EvidenceListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EvidenceCreate: EvidenceCreateMutation,
		EvidenceUpdate: EvidenceUpdateMutation,
		EvidenceRemove: EvidenceRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Evidence',
		path: '/4_0_0/Evidence/:id',
		query: EvidenceInstanceQuery,
	},
};
