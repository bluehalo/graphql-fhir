const {
	DeviceCreateMutation,
	DeviceUpdateMutation,
	DeviceRemoveMutation,
} = require('./mutation');

const {
	DeviceQuery,
	DeviceListQuery,
	DeviceInstanceQuery,
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
		DeviceRemove: DeviceRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Device',
		path: '/4_0_0/Device/:id',
		query: DeviceInstanceQuery,
	},
};
