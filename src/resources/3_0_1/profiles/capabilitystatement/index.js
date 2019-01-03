const {
	CapabilityStatementQuery,
	CapabilityStatementListQuery,
	CapabilityStatementInstanceQuery,
} = require('./query');

const {
	CapabilityStatementCreateMutation,
	CapabilityStatementUpdateMutation,
	CapabilityStatementDeleteMutation,
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
		CapabilityStatement: CapabilityStatementQuery,
		CapabilityStatementList: CapabilityStatementListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		CapabilityStatementCreate: CapabilityStatementCreateMutation,
		CapabilityStatementUpdate: CapabilityStatementUpdateMutation,
		CapabilityStatementDelete: CapabilityStatementDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'CapabilityStatement',
		path: '/3_0_1/CapabilityStatement/:id',
		query: CapabilityStatementInstanceQuery,
	},
};
