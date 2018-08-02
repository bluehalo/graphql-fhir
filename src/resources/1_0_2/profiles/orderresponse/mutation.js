// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OrderResponseSchema = require('../../schemas/orderresponse.schema');

// Inputs
const OrderResponseInput = require('../../inputs/orderresponse.input');


const {
	orderresponseCreateResolver,
	orderresponseUpdateResolver,
	orderresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a OrderResponse record.'
	},
	resource: {
		type: OrderResponseInput,
		description: 'OrderResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: orderresponseCreateResolver,
	type: OrderResponseSchema
};

/**
 * @name exports.OrderResponseUpdateMutation
 * @summary OrderResponseUpdate Mutation.
 */
module.exports.OrderResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple OrderResponses',
	resolve: orderresponseUpdateResolver,
	type: OrderResponseSchema
};

/**
 * @name exports.OrderResponseDeleteMutation
 * @summary OrderResponseDelete Mutation.
 */
module.exports.OrderResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single OrderResponse',
	resolve: orderresponseDeleteResolver,
	type: OrderResponseSchema
};
