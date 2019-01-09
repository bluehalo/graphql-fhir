const {
	ChargeItemCreateMutation,
	ChargeItemUpdateMutation,
	ChargeItemRemoveMutation,
} = require('./mutation');

const {
	ChargeItemQuery,
	ChargeItemListQuery,
	ChargeItemInstanceQuery,
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
		ChargeItem: ChargeItemQuery,
		ChargeItemList: ChargeItemListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ChargeItemCreate: ChargeItemCreateMutation,
		ChargeItemUpdate: ChargeItemUpdateMutation,
		ChargeItemRemove: ChargeItemRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ChargeItem',
		path: '/4_0_0/ChargeItem/:id',
		query: ChargeItemInstanceQuery,
	},
};
