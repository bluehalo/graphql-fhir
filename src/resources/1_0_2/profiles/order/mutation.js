// Schemas
const OrderSchema = require('../../schemas/order.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const OrderInput = require('../../inputs/order.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createOrder, updateOrder, removeOrder } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Order',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Order record.',
	},
	resource: {
		type: new GraphQLNonNull(OrderInput),
		description: 'Order Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Order record for deletion.',
	},
};

/**
 * @name exports.OrderCreateMutation
 * @summary OrderCreate mutation.
 */
module.exports.OrderCreateMutation = {
	description: 'Create a Order record',
	resolve: scopeInvariant(scopeOptions, createOrder),
	type: OrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrderUpdateMutation
 * @summary OrderUpdate mutation.
 */
module.exports.OrderUpdateMutation = {
	description: 'Update a Order record',
	resolve: scopeInvariant(scopeOptions, updateOrder),
	type: OrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrderRemoveMutation
 * @summary OrderRemove mutation.
 */
module.exports.OrderRemoveMutation = {
	description: 'Remove a Order record',
	resolve: scopeInvariant(scopeOptions, removeOrder),
	type: OrderSchema,
	args: DeleteArgs,
};
