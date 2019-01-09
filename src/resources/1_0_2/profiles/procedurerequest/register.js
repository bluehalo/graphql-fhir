const {
	ProcedureRequestCreateMutation,
	ProcedureRequestUpdateMutation,
	ProcedureRequestRemoveMutation,
} = require('./mutation');

const {
	ProcedureRequestQuery,
	ProcedureRequestListQuery,
	ProcedureRequestInstanceQuery,
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
		ProcedureRequest: ProcedureRequestQuery,
		ProcedureRequestList: ProcedureRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ProcedureRequestCreate: ProcedureRequestCreateMutation,
		ProcedureRequestUpdate: ProcedureRequestUpdateMutation,
		ProcedureRequestRemove: ProcedureRequestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ProcedureRequest',
		path: '/1_0_2/ProcedureRequest/:id',
		query: ProcedureRequestInstanceQuery,
	},
};
