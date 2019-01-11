// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SlotSchema = require('../../schemas/slot.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SlotArgs = require('../../parameters/slot.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, SlotArgs);

// Resolvers
const { getSlot, getSlotList, getSlotInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Slot',
	action: 'read',
};

/**
 * @name exports.SlotQuery
 * @summary Slot query.
 */
module.exports.SlotQuery = {
	description: 'Query for a single Slot',
	resolve: scopeInvariant(scopeOptions, getSlot),
	type: SlotSchema,
	args: args,
};

/**
 * @name exports.SlotListQuery
 * @summary Slot query.
 */
module.exports.SlotListQuery = {
	description: 'Query for a more than or just one Slot',
	resolve: scopeInvariant(scopeOptions, getSlotList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SlotInstanceQuery
 * @summary Slot query.
 */
module.exports.SlotInstanceQuery = {
	description: 'Access information about a single Slot',
	resolve: scopeInvariant(scopeOptions, getSlotInstance),
	type: SlotSchema,
	args: args,
};
