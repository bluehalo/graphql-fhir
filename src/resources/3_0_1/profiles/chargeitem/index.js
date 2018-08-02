const {
	ChargeItemQuery,
	ChargeItemListQuery,
	ChargeItemInstanceQuery
} = require('./query');

const {
	ChargeItemCreateMutation,
	ChargeItemUpdateMutation,
	ChargeItemDeleteMutation
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
		ChargeItem: ChargeItemQuery,
		ChargeItemList: ChargeItemListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		ChargeItemCreate: ChargeItemCreateMutation,
		ChargeItemUpdate: ChargeItemUpdateMutation,
		ChargeItemDelete: ChargeItemDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'ChargeItem',
		path: '/3_0_1/ChargeItem/:id',
		query: ChargeItemInstanceQuery
	}
};
