// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OrderSchema = require('../../schemas/order.schema');

// Inputs
const OrderInput = require('../../inputs/order.input');

// Resolvers
const {
	orderCreateResolver,
	orderUpdateResolver,
	orderDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Order',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Order record.',
	},
	resource: {
		type: new GraphQLNonNull(OrderInput),
		description: 'Order Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Order record for deletion.',
	},
};

/**
 * @name exports.OrderCreateMutation
 * @summary OrderCreate Mutation.
 */
module.exports.OrderCreateMutation = {
	args: WriteArgs,
	description: 'Create a Order',
	resolve: scopeInvariant(scopeOptions, orderCreateResolver),
	type: OrderSchema,
};

/**
 * @name exports.OrderUpdateMutation
 * @summary OrderUpdate Mutation.
 */
module.exports.OrderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Orders',
	resolve: scopeInvariant(scopeOptions, orderUpdateResolver),
	type: OrderSchema,
};

/**
 * @name exports.OrderDeleteMutation
 * @summary OrderDelete Mutation.
 */
module.exports.OrderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Order',
	resolve: scopeInvariant(scopeOptions, orderDeleteResolver),
	type: OrderSchema,
};
