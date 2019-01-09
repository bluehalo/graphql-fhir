const {
	ServiceRequestCreateMutation,
	ServiceRequestUpdateMutation,
	ServiceRequestRemoveMutation,
} = require('./mutation');

const {
	ServiceRequestQuery,
	ServiceRequestListQuery,
	ServiceRequestInstanceQuery,
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
		ServiceRequest: ServiceRequestQuery,
		ServiceRequestList: ServiceRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ServiceRequestCreate: ServiceRequestCreateMutation,
		ServiceRequestUpdate: ServiceRequestUpdateMutation,
		ServiceRequestRemove: ServiceRequestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ServiceRequest',
		path: '/4_0_0/ServiceRequest/:id',
		query: ServiceRequestInstanceQuery,
	},
};
