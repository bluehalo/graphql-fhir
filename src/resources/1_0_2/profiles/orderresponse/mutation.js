// Schemas
const OrderResponseSchema = require('../../schemas/orderresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const OrderResponseInput = require('../../inputs/orderresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createOrderResponse,
	updateOrderResponse,
	removeOrderResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'OrderResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a OrderResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(OrderResponseInput),
		description: 'OrderResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a OrderResponse record for deletion.',
	},
};

/**
 * @name exports.OrderResponseCreateMutation
 * @summary OrderResponseCreate mutation.
 */
module.exports.OrderResponseCreateMutation = {
	description: 'Create a OrderResponse record',
	resolve: scopeInvariant(scopeOptions, createOrderResponse),
	type: OrderResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrderResponseUpdateMutation
 * @summary OrderResponseUpdate mutation.
 */
module.exports.OrderResponseUpdateMutation = {
	description: 'Update a OrderResponse record',
	resolve: scopeInvariant(scopeOptions, updateOrderResponse),
	type: OrderResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.OrderResponseRemoveMutation
 * @summary OrderResponseRemove mutation.
 */
module.exports.OrderResponseRemoveMutation = {
	description: 'Remove a OrderResponse record',
	resolve: scopeInvariant(scopeOptions, removeOrderResponse),
	type: OrderResponseSchema,
	args: DeleteArgs,
};
