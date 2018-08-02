// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const OrderSchema = require('../../schemas/order.schema');

// Inputs
const OrderInput = require('../../inputs/order.input');


const {
	orderCreateResolver,
	orderUpdateResolver,
	orderDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Order record.'
	},
	resource: {
		type: OrderInput,
		description: 'Order Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Order record for deletion.'
	}
};

/**
 * @name exports.OrderCreateMutation
 * @summary OrderCreate Mutation.
 */
module.exports.OrderCreateMutation = {
	args: WriteArgs,
	description: 'Create a Order',
	resolve: orderCreateResolver,
	type: OrderSchema
};

/**
 * @name exports.OrderUpdateMutation
 * @summary OrderUpdate Mutation.
 */
module.exports.OrderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Orders',
	resolve: orderUpdateResolver,
	type: OrderSchema
};

/**
 * @name exports.OrderDeleteMutation
 * @summary OrderDelete Mutation.
 */
module.exports.OrderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Order',
	resolve: orderDeleteResolver,
	type: OrderSchema
};
