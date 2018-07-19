// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const SupplyDeliverySchema = require('../../schemas/supplydelivery.schema');

// Arguments
const SupplyDeliveryArgs = require('../../parameters/supplydelivery.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	supplydeliveryResolver,
	supplydeliveryListResolver,
	supplydeliveryInstanceResolver
} = require('./resolver');

/**
 * @name exports.SupplyDeliveryQuery
 * @summary SupplyDelivery Query.
 */
module.exports.SupplyDeliveryQuery = {
	args: Object.assign({}, CommonArgs, SupplyDeliveryArgs),
	description: 'Query for a single SupplyDelivery',
	resolve: supplydeliveryResolver,
	type: SupplyDeliverySchema
};

/**
 * @name exports.SupplyDeliveryListQuery
 * @summary SupplyDeliveryList Query.
 */
module.exports.SupplyDeliveryListQuery = {
	args: Object.assign({}, CommonArgs, SupplyDeliveryArgs),
	description: 'Query for multiple SupplyDeliverys',
	resolve: supplydeliveryListResolver,
	type: BundleSchema
};

/**
 * @name exports.SupplyDeliveryInstanceQuery
 * @summary SupplyDeliveryInstance Query.
 */
module.exports.SupplyDeliveryInstanceQuery = {
	description: 'Get information about a single SupplyDelivery',
	resolve: supplydeliveryInstanceResolver,
	type: SupplyDeliverySchema
};
