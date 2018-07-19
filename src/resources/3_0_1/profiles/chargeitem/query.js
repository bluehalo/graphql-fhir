// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ChargeItemSchema = require('../../schemas/chargeitem.schema');

// Arguments
const ChargeItemArgs = require('../../parameters/chargeitem.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	chargeitemResolver,
	chargeitemListResolver,
	chargeitemInstanceResolver
} = require('./resolver');

/**
 * @name exports.ChargeItemQuery
 * @summary ChargeItem Query.
 */
module.exports.ChargeItemQuery = {
	args: Object.assign({}, CommonArgs, ChargeItemArgs),
	description: 'Query for a single ChargeItem',
	resolve: chargeitemResolver,
	type: ChargeItemSchema
};

/**
 * @name exports.ChargeItemListQuery
 * @summary ChargeItemList Query.
 */
module.exports.ChargeItemListQuery = {
	args: Object.assign({}, CommonArgs, ChargeItemArgs),
	description: 'Query for multiple ChargeItems',
	resolve: chargeitemListResolver,
	type: BundleSchema
};

/**
 * @name exports.ChargeItemInstanceQuery
 * @summary ChargeItemInstance Query.
 */
module.exports.ChargeItemInstanceQuery = {
	description: 'Get information about a single ChargeItem',
	resolve: chargeitemInstanceResolver,
	type: ChargeItemSchema
};
