// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OrderResponseSchema = require('../../schemas/orderresponse.schema');

// Inputs
const OrderResponseInput = require('../../inputs/orderresponse.input');

// Resolvers
const {
	orderresponseCreateResolver,
	orderresponseUpdateResolver,
	orderresponseDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'OrderResponse',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a OrderResponse record.'
	},
	resource: {
		type: new GraphQLNonNull(OrderResponseInput),
		description: 'OrderResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a OrderResponse record for deletion.'
	}
};

/**
 * @name exports.OrderResponseCreateMutation
 * @summary OrderResponseCreate Mutation.
 */
module.exports.OrderResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a OrderResponse',
	resolve: scopeInvariant(scopeOptions, orderresponseCreateResolver),
	type: OrderResponseSchema
};

/**
 * @name exports.OrderResponseUpdateMutation
 * @summary OrderResponseUpdate Mutation.
 */
module.exports.OrderResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple OrderResponses',
	resolve: scopeInvariant(scopeOptions, orderresponseUpdateResolver),
	type: OrderResponseSchema
};

/**
 * @name exports.OrderResponseDeleteMutation
 * @summary OrderResponseDelete Mutation.
 */
module.exports.OrderResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single OrderResponse',
	resolve: scopeInvariant(scopeOptions, orderresponseDeleteResolver),
	type: OrderResponseSchema
};
