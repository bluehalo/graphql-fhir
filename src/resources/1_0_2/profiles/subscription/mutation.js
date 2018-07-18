// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SubscriptionSchema = require('../../schemas/subscription.schema');

// Inputs
const SubscriptionInput = require('../../inputs/subscription.input');


const {
	subscriptionCreateResolver,
	subscriptionUpdateResolver,
	subscriptionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Subscription record.'
	},
	resource: {
		type: SubscriptionInput,
		description: 'Subscription Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Subscription record for deletion.'
	}
};

/**
 * @name exports.SubscriptionCreateMutation
 * @summary SubscriptionCreate Mutation.
 */
module.exports.SubscriptionCreateMutation = {
	args: WriteArgs,
	description: 'Create a Subscription',
	resolve: subscriptionCreateResolver,
	type: SubscriptionSchema
};

/**
 * @name exports.SubscriptionUpdateMutation
 * @summary SubscriptionUpdate Mutation.
 */
module.exports.SubscriptionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Subscriptions',
	resolve: subscriptionUpdateResolver,
	type: SubscriptionSchema
};

/**
 * @name exports.SubscriptionDeleteMutation
 * @summary SubscriptionDelete Mutation.
 */
module.exports.SubscriptionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Subscription',
	resolve: subscriptionDeleteResolver,
	type: SubscriptionSchema
};
