// Schemas
const SubscriptionSchema = require('../../schemas/subscription.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SubscriptionInput = require('../../inputs/subscription.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSubscription,
	updateSubscription,
	removeSubscription,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Subscription',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Subscription record.',
	},
	resource: {
		type: new GraphQLNonNull(SubscriptionInput),
		description: 'Subscription Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Subscription record for deletion.',
	},
};

/**
 * @name exports.SubscriptionCreateMutation
 * @summary SubscriptionCreate mutation.
 */
module.exports.SubscriptionCreateMutation = {
	description: 'Create a Subscription record',
	resolve: scopeInvariant(scopeOptions, createSubscription),
	type: SubscriptionSchema,
	args: WriteArgs,
};

/**
 * @name exports.SubscriptionUpdateMutation
 * @summary SubscriptionUpdate mutation.
 */
module.exports.SubscriptionUpdateMutation = {
	description: 'Update a Subscription record',
	resolve: scopeInvariant(scopeOptions, updateSubscription),
	type: SubscriptionSchema,
	args: WriteArgs,
};

/**
 * @name exports.SubscriptionRemoveMutation
 * @summary SubscriptionRemove mutation.
 */
module.exports.SubscriptionRemoveMutation = {
	description: 'Remove a Subscription record',
	resolve: scopeInvariant(scopeOptions, removeSubscription),
	type: SubscriptionSchema,
	args: DeleteArgs,
};
