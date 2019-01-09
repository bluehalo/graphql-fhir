const {
	MedicinalProductCreateMutation,
	MedicinalProductUpdateMutation,
	MedicinalProductRemoveMutation,
} = require('./mutation');

const {
	MedicinalProductQuery,
	MedicinalProductListQuery,
	MedicinalProductInstanceQuery,
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
		MedicinalProduct: MedicinalProductQuery,
		MedicinalProductList: MedicinalProductListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicinalProductCreate: MedicinalProductCreateMutation,
		MedicinalProductUpdate: MedicinalProductUpdateMutation,
		MedicinalProductRemove: MedicinalProductRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MedicinalProduct',
		path: '/4_0_0/MedicinalProduct/:id',
		query: MedicinalProductInstanceQuery,
	},
};
