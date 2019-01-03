const {
	DeviceRequestQuery,
	DeviceRequestListQuery,
	DeviceRequestInstanceQuery,
} = require('./query');

const {
	DeviceRequestCreateMutation,
	DeviceRequestUpdateMutation,
	DeviceRequestDeleteMutation,
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
		DeviceRequest: DeviceRequestQuery,
		DeviceRequestList: DeviceRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DeviceRequestCreate: DeviceRequestCreateMutation,
		DeviceRequestUpdate: DeviceRequestUpdateMutation,
		DeviceRequestDelete: DeviceRequestDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'DeviceRequest',
		path: '/3_0_1/DeviceRequest/:id',
		query: DeviceRequestInstanceQuery,
	},
};
