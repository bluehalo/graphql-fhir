const {
	DeviceUseRequestQuery,
	DeviceUseRequestListQuery,
	DeviceUseRequestInstanceQuery,
} = require('./query');

const {
	DeviceUseRequestCreateMutation,
	DeviceUseRequestUpdateMutation,
	DeviceUseRequestDeleteMutation,
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
		DeviceUseRequestDelete: DeviceUseRequestDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'DeviceUseRequest',
		path: '/1_0_2/DeviceUseRequest/:id',
		query: DeviceUseRequestInstanceQuery,
	},
};
