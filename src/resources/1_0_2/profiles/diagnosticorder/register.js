const {
	DiagnosticOrderCreateMutation,
	DiagnosticOrderUpdateMutation,
	DiagnosticOrderRemoveMutation,
} = require('./mutation');

const {
	DiagnosticOrderQuery,
	DiagnosticOrderListQuery,
	DiagnosticOrderInstanceQuery,
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
		DiagnosticOrder: DiagnosticOrderQuery,
		DiagnosticOrderList: DiagnosticOrderListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DiagnosticOrderCreate: DiagnosticOrderCreateMutation,
		DiagnosticOrderUpdate: DiagnosticOrderUpdateMutation,
		DiagnosticOrderRemove: DiagnosticOrderRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'DiagnosticOrder',
		path: '/1_0_2/DiagnosticOrder/:id',
		query: DiagnosticOrderInstanceQuery,
	},
};
