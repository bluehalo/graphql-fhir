// Schemas
const ChargeItemSchema = require('../../schemas/chargeitem.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ChargeItemArgs = require('../../parameters/chargeitem.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	chargeitemResolver,
	chargeitemListResolver,
	chargeitemInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ChargeItem',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ChargeItemQuery
 * @summary ChargeItem Query.
 */
module.exports.ChargeItemQuery = {
	args: Object.assign({}, CommonArgs, ChargeItemArgs),
	description: 'Query for a single ChargeItem',
	resolve: scopeInvariant(scopeOptions, chargeitemResolver),
	type: ChargeItemSchema
};

/**
 * @name exports.ChargeItemListQuery
 * @summary ChargeItemList Query.
 */
module.exports.ChargeItemListQuery = {
	args: Object.assign({}, CommonArgs, ChargeItemArgs),
	description: 'Query for multiple ChargeItems',
	resolve: scopeInvariant(scopeOptions, chargeitemListResolver),
	type: BundleSchema
};

/**
 * @name exports.ChargeItemInstanceQuery
 * @summary ChargeItemInstance Query.
 */
module.exports.ChargeItemInstanceQuery = {
	description: 'Get information about a single ChargeItem',
	resolve: scopeInvariant(scopeOptions, chargeitemInstanceResolver),
	type: ChargeItemSchema
};
