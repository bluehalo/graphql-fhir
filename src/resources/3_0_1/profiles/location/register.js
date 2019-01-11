const {
	LocationCreateMutation,
	LocationUpdateMutation,
	LocationRemoveMutation,
} = require('./mutation');

const {
	LocationQuery,
	LocationListQuery,
	LocationInstanceQuery,
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
		Location: LocationQuery,
		LocationList: LocationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		LocationCreate: LocationCreateMutation,
		LocationUpdate: LocationUpdateMutation,
		LocationRemove: LocationRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Location',
		path: '/3_0_1/Location/:id',
		query: LocationInstanceQuery,
	},
};
