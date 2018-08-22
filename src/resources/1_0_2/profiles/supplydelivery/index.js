const {
	SupplyDeliveryQuery,
	SupplyDeliveryListQuery,
	SupplyDeliveryInstanceQuery
} = require('./query');

const {
	SupplyDeliveryCreateMutation,
	SupplyDeliveryUpdateMutation,
	SupplyDeliveryDeleteMutation
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
		SupplyDelivery: SupplyDeliveryQuery,
		SupplyDeliveryList: SupplyDeliveryListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		SupplyDeliveryCreate: SupplyDeliveryCreateMutation,
		SupplyDeliveryUpdate: SupplyDeliveryUpdateMutation,
		SupplyDeliveryDelete: SupplyDeliveryDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'SupplyDelivery',
		path: '/1_0_2/SupplyDelivery/:id',
		query: SupplyDeliveryInstanceQuery
	}
};
