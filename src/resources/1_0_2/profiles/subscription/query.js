// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SubscriptionSchema = require('../../schemas/subscription.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SubscriptionArgs = require('../../parameters/subscription.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, SubscriptionArgs);

// Resolvers
const {
	getSubscription,
	getSubscriptionList,
	getSubscriptionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Subscription',
	action: 'read',
};

/**
 * @name exports.SubscriptionQuery
 * @summary Subscription query.
 */
module.exports.SubscriptionQuery = {
	description: 'Query for a single Subscription',
	resolve: scopeInvariant(scopeOptions, getSubscription),
	type: SubscriptionSchema,
	args: args,
};

/**
 * @name exports.SubscriptionListQuery
 * @summary Subscription query.
 */
module.exports.SubscriptionListQuery = {
	description: 'Query for a more than or just one Subscription',
	resolve: scopeInvariant(scopeOptions, getSubscriptionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SubscriptionInstanceQuery
 * @summary Subscription query.
 */
module.exports.SubscriptionInstanceQuery = {
	description: 'Access information about a single Subscription',
	resolve: scopeInvariant(scopeOptions, getSubscriptionInstance),
	type: SubscriptionSchema,
	args: args,
};
