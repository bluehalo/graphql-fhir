const {
	SubscriptionCreateMutation,
	SubscriptionUpdateMutation,
	SubscriptionRemoveMutation,
} = require('./mutation');

const {
	SubscriptionQuery,
	SubscriptionListQuery,
	SubscriptionInstanceQuery,
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
		Subscription: SubscriptionQuery,
		SubscriptionList: SubscriptionListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		SubscriptionCreate: SubscriptionCreateMutation,
		SubscriptionUpdate: SubscriptionUpdateMutation,
		SubscriptionRemove: SubscriptionRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Subscription',
		path: '/3_0_1/Subscription/:id',
		query: SubscriptionInstanceQuery,
	},
};
