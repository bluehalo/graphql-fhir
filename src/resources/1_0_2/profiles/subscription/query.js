// Schemas
const SubscriptionSchema = require('../../schemas/subscription.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SubscriptionArgs = require('../../parameters/subscription.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	subscriptionResolver,
	subscriptionListResolver,
	subscriptionInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Subscription',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.SubscriptionQuery
 * @summary Subscription Query.
 */
module.exports.SubscriptionQuery = {
	args: Object.assign({}, CommonArgs, SubscriptionArgs),
	description: 'Query for a single Subscription',
	resolve: scopeInvariant(scopeOptions, subscriptionResolver),
	type: SubscriptionSchema,
};

/**
 * @name exports.SubscriptionListQuery
 * @summary SubscriptionList Query.
 */
module.exports.SubscriptionListQuery = {
	args: Object.assign({}, CommonArgs, SubscriptionArgs),
	description: 'Query for multiple Subscriptions',
	resolve: scopeInvariant(scopeOptions, subscriptionListResolver),
	type: BundleSchema,
};

/**
 * @name exports.SubscriptionInstanceQuery
 * @summary SubscriptionInstance Query.
 */
module.exports.SubscriptionInstanceQuery = {
	description: 'Get information about a single Subscription',
	resolve: scopeInvariant(scopeOptions, subscriptionInstanceResolver),
	type: SubscriptionSchema,
};
