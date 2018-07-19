// Schemas
const OrderResponseSchema = require('../../schemas/orderresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const OrderResponseArgs = require('../../parameters/orderresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	orderresponseResolver,
	orderresponseListResolver,
	orderresponseInstanceResolver
} = require('./resolver');

/**
 * @name exports.OrderResponseQuery
 * @summary OrderResponse Query.
 */
module.exports.OrderResponseQuery = {
	args: Object.assign({}, CommonArgs, OrderResponseArgs),
	description: 'Query for a single OrderResponse',
	resolve: orderresponseResolver,
	type: OrderResponseSchema
};

/**
 * @name exports.OrderResponseListQuery
 * @summary OrderResponseList Query.
 */
module.exports.OrderResponseListQuery = {
	args: Object.assign({}, CommonArgs, OrderResponseArgs),
	description: 'Query for multiple OrderResponses',
	resolve: orderresponseListResolver,
	type: BundleSchema
};

/**
 * @name exports.OrderResponseInstanceQuery
 * @summary OrderResponseInstance Query.
 */
module.exports.OrderResponseInstanceQuery = {
	description: 'Get information about a single OrderResponse',
	resolve: orderresponseInstanceResolver,
	type: OrderResponseSchema
};
