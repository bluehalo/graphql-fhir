const {
	TerminologyCapabilitiesCreateMutation,
	TerminologyCapabilitiesUpdateMutation,
	TerminologyCapabilitiesRemoveMutation,
} = require('./mutation');

const {
	TerminologyCapabilitiesQuery,
	TerminologyCapabilitiesListQuery,
	TerminologyCapabilitiesInstanceQuery,
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
		TerminologyCapabilities: TerminologyCapabilitiesQuery,
		TerminologyCapabilitiesList: TerminologyCapabilitiesListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		TerminologyCapabilitiesCreate: TerminologyCapabilitiesCreateMutation,
		TerminologyCapabilitiesUpdate: TerminologyCapabilitiesUpdateMutation,
		TerminologyCapabilitiesRemove: TerminologyCapabilitiesRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'TerminologyCapabilities',
		path: '/4_0_0/TerminologyCapabilities/:id',
		query: TerminologyCapabilitiesInstanceQuery,
	},
};
