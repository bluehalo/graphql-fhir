const {
	SlotCreateMutation,
	SlotUpdateMutation,
	SlotRemoveMutation,
} = require('./mutation');

const { SlotQuery, SlotListQuery, SlotInstanceQuery } = require('./query');

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
		Slot: SlotQuery,
		SlotList: SlotListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		SlotCreate: SlotCreateMutation,
		SlotUpdate: SlotUpdateMutation,
		SlotRemove: SlotRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Slot',
		path: '/3_0_1/Slot/:id',
		query: SlotInstanceQuery,
	},
};
