const {
	DeviceUseRequestCreateMutation,
	DeviceUseRequestUpdateMutation,
	DeviceUseRequestRemoveMutation,
} = require('./mutation');

const {
	DeviceUseRequestQuery,
	DeviceUseRequestListQuery,
	DeviceUseRequestInstanceQuery,
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
		DeviceUseRequest: DeviceUseRequestQuery,
		DeviceUseRequestList: DeviceUseRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DeviceUseRequestCreate: DeviceUseRequestCreateMutation,
		DeviceUseRequestUpdate: DeviceUseRequestUpdateMutation,
		DeviceUseRequestRemove: DeviceUseRequestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'DeviceUseRequest',
		path: '/1_0_2/DeviceUseRequest/:id',
		query: DeviceUseRequestInstanceQuery,
	},
};
