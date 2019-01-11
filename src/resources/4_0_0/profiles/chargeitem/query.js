// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ChargeItemSchema = require('../../schemas/chargeitem.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ChargeItemArgs = require('../../parameters/chargeitem.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, ChargeItemArgs);

// Resolvers
const {
	getChargeItem,
	getChargeItemList,
	getChargeItemInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ChargeItem',
	action: 'read',
};

/**
 * @name exports.ChargeItemQuery
 * @summary ChargeItem query.
 */
module.exports.ChargeItemQuery = {
	description: 'Query for a single ChargeItem',
	resolve: scopeInvariant(scopeOptions, getChargeItem),
	type: ChargeItemSchema,
	args: args,
};

/**
 * @name exports.ChargeItemListQuery
 * @summary ChargeItem query.
 */
module.exports.ChargeItemListQuery = {
	description: 'Query for a more than or just one ChargeItem',
	resolve: scopeInvariant(scopeOptions, getChargeItemList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ChargeItemInstanceQuery
 * @summary ChargeItem query.
 */
module.exports.ChargeItemInstanceQuery = {
	description: 'Access information about a single ChargeItem',
	resolve: scopeInvariant(scopeOptions, getChargeItemInstance),
	type: ChargeItemSchema,
	args: args,
};
