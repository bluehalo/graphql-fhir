// Schemas
const SupplyDeliverySchema = require('../../schemas/supplydelivery.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SupplyDeliveryArgs = require('../../parameters/supplydelivery.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	supplydeliveryResolver,
	supplydeliveryListResolver,
	supplydeliveryInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'SupplyDelivery',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.SupplyDeliveryQuery
 * @summary SupplyDelivery Query.
 */
module.exports.SupplyDeliveryQuery = {
	args: Object.assign({}, CommonArgs, SupplyDeliveryArgs),
	description: 'Query for a single SupplyDelivery',
	resolve: scopeInvariant(scopeOptions, supplydeliveryResolver),
	type: SupplyDeliverySchema,
};

/**
 * @name exports.SupplyDeliveryListQuery
 * @summary SupplyDeliveryList Query.
 */
module.exports.SupplyDeliveryListQuery = {
	args: Object.assign({}, CommonArgs, SupplyDeliveryArgs),
	description: 'Query for multiple SupplyDeliverys',
	resolve: scopeInvariant(scopeOptions, supplydeliveryListResolver),
	type: BundleSchema,
};

/**
 * @name exports.SupplyDeliveryInstanceQuery
 * @summary SupplyDeliveryInstance Query.
 */
module.exports.SupplyDeliveryInstanceQuery = {
	description: 'Get information about a single SupplyDelivery',
	resolve: scopeInvariant(scopeOptions, supplydeliveryInstanceResolver),
	type: SupplyDeliverySchema,
};
