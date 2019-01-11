const {
	PaymentReconciliationCreateMutation,
	PaymentReconciliationUpdateMutation,
	PaymentReconciliationRemoveMutation,
} = require('./mutation');

const {
	PaymentReconciliationQuery,
	PaymentReconciliationListQuery,
	PaymentReconciliationInstanceQuery,
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
		PaymentReconciliation: PaymentReconciliationQuery,
		PaymentReconciliationList: PaymentReconciliationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		PaymentReconciliationCreate: PaymentReconciliationCreateMutation,
		PaymentReconciliationUpdate: PaymentReconciliationUpdateMutation,
		PaymentReconciliationRemove: PaymentReconciliationRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'PaymentReconciliation',
		path: '/1_0_2/PaymentReconciliation/:id',
		query: PaymentReconciliationInstanceQuery,
	},
};
