const {
	ProcessRequestCreateMutation,
	ProcessRequestUpdateMutation,
	ProcessRequestRemoveMutation,
} = require('./mutation');

const {
	ProcessRequestQuery,
	ProcessRequestListQuery,
	ProcessRequestInstanceQuery,
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
		ProcessRequest: ProcessRequestQuery,
		ProcessRequestList: ProcessRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ProcessRequestCreate: ProcessRequestCreateMutation,
		ProcessRequestUpdate: ProcessRequestUpdateMutation,
		ProcessRequestRemove: ProcessRequestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ProcessRequest',
		path: '/1_0_2/ProcessRequest/:id',
		query: ProcessRequestInstanceQuery,
	},
};
