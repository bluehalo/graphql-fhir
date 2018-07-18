// Schemas
const OrderSchema = require('../../schemas/order.schema');

// Arguments
const OrderArgs = require('../../parameters/order.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	orderResolver,
	orderListResolver,
	orderInstanceResolver
} = require('./resolver');

/**
 * @name exports.OrderQuery
 * @summary Order Query.
 */
module.exports.OrderQuery = {
	args: Object.assign({}, CommonArgs, OrderArgs),
	description: 'Query for a single Order',
	resolve: orderResolver,
	type: OrderSchema
};

/**
 * @name exports.OrderListQuery
 * @summary OrderList Query.
 */
module.exports.OrderListQuery = {
	args: Object.assign({}, CommonArgs, OrderArgs),
	description: 'Query for multiple Orders',
	resolve: orderListResolver,
	type: new GraphQLList(OrderSchema)
};

/**
 * @name exports.OrderInstanceQuery
 * @summary OrderInstance Query.
 */
module.exports.OrderInstanceQuery = {
	description: 'Get information about a single Order',
	resolve: orderInstanceResolver,
	type: OrderSchema
};
