const {
	DeviceQuery,
	DeviceListQuery,
	DeviceInstanceQuery,
} = require('./query');

const {
	DeviceCreateMutation,
	DeviceUpdateMutation,
	DeviceDeleteMutation,
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
		Device: DeviceQuery,
		DeviceList: DeviceListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DeviceCreate: DeviceCreateMutation,
		DeviceUpdate: DeviceUpdateMutation,
		DeviceDelete: DeviceDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'Device',
		path: '/3_0_1/Device/:id',
		query: DeviceInstanceQuery,
	},
};
