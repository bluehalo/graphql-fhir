const {
	NutritionOrderCreateMutation,
	NutritionOrderUpdateMutation,
	NutritionOrderRemoveMutation,
} = require('./mutation');

const {
	NutritionOrderQuery,
	NutritionOrderListQuery,
	NutritionOrderInstanceQuery,
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
		NutritionOrder: NutritionOrderQuery,
		NutritionOrderList: NutritionOrderListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		NutritionOrderCreate: NutritionOrderCreateMutation,
		NutritionOrderUpdate: NutritionOrderUpdateMutation,
		NutritionOrderRemove: NutritionOrderRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'NutritionOrder',
		path: '/1_0_2/NutritionOrder/:id',
		query: NutritionOrderInstanceQuery,
	},
};
