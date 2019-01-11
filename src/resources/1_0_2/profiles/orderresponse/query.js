// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const OrderResponseSchema = require('../../schemas/orderresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const OrderResponseArgs = require('../../parameters/orderresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, OrderResponseArgs);

// Resolvers
const {
	getOrderResponse,
	getOrderResponseList,
	getOrderResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'OrderResponse',
	action: 'read',
};

/**
 * @name exports.OrderResponseQuery
 * @summary OrderResponse query.
 */
module.exports.OrderResponseQuery = {
	description: 'Query for a single OrderResponse',
	resolve: scopeInvariant(scopeOptions, getOrderResponse),
	type: OrderResponseSchema,
	args: args,
};

/**
 * @name exports.OrderResponseListQuery
 * @summary OrderResponse query.
 */
module.exports.OrderResponseListQuery = {
	description: 'Query for a more than or just one OrderResponse',
	resolve: scopeInvariant(scopeOptions, getOrderResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.OrderResponseInstanceQuery
 * @summary OrderResponse query.
 */
module.exports.OrderResponseInstanceQuery = {
	description: 'Access information about a single OrderResponse',
	resolve: scopeInvariant(scopeOptions, getOrderResponseInstance),
	type: OrderResponseSchema,
	args: args,
};
