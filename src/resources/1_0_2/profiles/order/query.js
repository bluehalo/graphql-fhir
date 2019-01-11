// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const OrderSchema = require('../../schemas/order.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const OrderArgs = require('../../parameters/order.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, OrderArgs);

// Resolvers
const { getOrder, getOrderList, getOrderInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Order',
	action: 'read',
};

/**
 * @name exports.OrderQuery
 * @summary Order query.
 */
module.exports.OrderQuery = {
	description: 'Query for a single Order',
	resolve: scopeInvariant(scopeOptions, getOrder),
	type: OrderSchema,
	args: args,
};

/**
 * @name exports.OrderListQuery
 * @summary Order query.
 */
module.exports.OrderListQuery = {
	description: 'Query for a more than or just one Order',
	resolve: scopeInvariant(scopeOptions, getOrderList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.OrderInstanceQuery
 * @summary Order query.
 */
module.exports.OrderInstanceQuery = {
	description: 'Access information about a single Order',
	resolve: scopeInvariant(scopeOptions, getOrderInstance),
	type: OrderSchema,
	args: args,
};
