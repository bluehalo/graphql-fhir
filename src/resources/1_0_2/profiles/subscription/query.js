// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const SubscriptionSchema = require('../../schemas/subscription.schema');

// Arguments
const SubscriptionArgs = require('../../parameters/subscription.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	subscriptionResolver,
	subscriptionListResolver,
	subscriptionInstanceResolver
} = require('./resolver');

/**
 * @name exports.SubscriptionQuery
 * @summary Subscription Query.
 */
module.exports.SubscriptionQuery = {
	args: Object.assign({}, CommonArgs, SubscriptionArgs),
	description: 'Query for a single Subscription',
	resolve: subscriptionResolver,
	type: SubscriptionSchema
};

/**
 * @name exports.SubscriptionListQuery
 * @summary SubscriptionList Query.
 */
module.exports.SubscriptionListQuery = {
	args: Object.assign({}, CommonArgs, SubscriptionArgs),
	description: 'Query for multiple Subscriptions',
	resolve: subscriptionListResolver,
	type: BundleSchema
};

/**
 * @name exports.SubscriptionInstanceQuery
 * @summary SubscriptionInstance Query.
 */
module.exports.SubscriptionInstanceQuery = {
	description: 'Get information about a single Subscription',
	resolve: subscriptionInstanceResolver,
	type: SubscriptionSchema
};
