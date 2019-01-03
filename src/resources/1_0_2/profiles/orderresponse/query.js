// Schemas
const OrderResponseSchema = require('../../schemas/orderresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const OrderResponseArgs = require('../../parameters/orderresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	orderresponseResolver,
	orderresponseListResolver,
	orderresponseInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'OrderResponse',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.OrderResponseQuery
 * @summary OrderResponse Query.
 */
module.exports.OrderResponseQuery = {
	args: Object.assign({}, CommonArgs, OrderResponseArgs),
	description: 'Query for a single OrderResponse',
	resolve: scopeInvariant(scopeOptions, orderresponseResolver),
	type: OrderResponseSchema,
};

/**
 * @name exports.OrderResponseListQuery
 * @summary OrderResponseList Query.
 */
module.exports.OrderResponseListQuery = {
	args: Object.assign({}, CommonArgs, OrderResponseArgs),
	description: 'Query for multiple OrderResponses',
	resolve: scopeInvariant(scopeOptions, orderresponseListResolver),
	type: BundleSchema,
};

/**
 * @name exports.OrderResponseInstanceQuery
 * @summary OrderResponseInstance Query.
 */
module.exports.OrderResponseInstanceQuery = {
	description: 'Get information about a single OrderResponse',
	resolve: scopeInvariant(scopeOptions, orderresponseInstanceResolver),
	type: OrderResponseSchema,
};
