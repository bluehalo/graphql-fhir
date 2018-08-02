const {
	SlotQuery,
	SlotListQuery,
	SlotInstanceQuery
} = require('./query');

const {
	SlotCreateMutation,
	SlotUpdateMutation,
	SlotDeleteMutation
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
		Slot: SlotQuery,
		SlotList: SlotListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		SlotCreate: SlotCreateMutation,
		SlotUpdate: SlotUpdateMutation,
		SlotDelete: SlotDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Slot',
		path: '/3_0_1/Slot/:id',
		query: SlotInstanceQuery
	}
};
