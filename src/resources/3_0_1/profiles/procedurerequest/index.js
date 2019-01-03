const {
	ProcedureRequestQuery,
	ProcedureRequestListQuery,
	ProcedureRequestInstanceQuery,
} = require('./query');

const {
	ProcedureRequestCreateMutation,
	ProcedureRequestUpdateMutation,
	ProcedureRequestDeleteMutation,
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
		ProcedureRequestDelete: ProcedureRequestDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'ProcedureRequest',
		path: '/3_0_1/ProcedureRequest/:id',
		query: ProcedureRequestInstanceQuery,
	},
};
