// Schemas
const OrderSchema = require('../../schemas/order.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const OrderArgs = require('../../parameters/order.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	orderResolver,
	orderListResolver,
	orderInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Order',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.OrderQuery
 * @summary Order Query.
 */
module.exports.OrderQuery = {
	args: Object.assign({}, CommonArgs, OrderArgs),
	description: 'Query for a single Order',
	resolve: scopeInvariant(scopeOptions, orderResolver),
	type: OrderSchema,
};

/**
 * @name exports.OrderListQuery
 * @summary OrderList Query.
 */
module.exports.OrderListQuery = {
	args: Object.assign({}, CommonArgs, OrderArgs),
	description: 'Query for multiple Orders',
	resolve: scopeInvariant(scopeOptions, orderListResolver),
	type: BundleSchema,
};

/**
 * @name exports.OrderInstanceQuery
 * @summary OrderInstance Query.
 */
module.exports.OrderInstanceQuery = {
	description: 'Get information about a single Order',
	resolve: scopeInvariant(scopeOptions, orderInstanceResolver),
	type: OrderSchema,
};
