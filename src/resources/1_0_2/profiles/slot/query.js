// Schemas
const SlotSchema = require('../../schemas/slot.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SlotArgs = require('../../parameters/slot.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	slotResolver,
	slotListResolver,
	slotInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Slot',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.SlotQuery
 * @summary Slot Query.
 */
module.exports.SlotQuery = {
	args: Object.assign({}, CommonArgs, SlotArgs),
	description: 'Query for a single Slot',
	resolve: scopeInvariant(scopeOptions, slotResolver),
	type: SlotSchema
};

/**
 * @name exports.SlotListQuery
 * @summary SlotList Query.
 */
module.exports.SlotListQuery = {
	args: Object.assign({}, CommonArgs, SlotArgs),
	description: 'Query for multiple Slots',
	resolve: scopeInvariant(scopeOptions, slotListResolver),
	type: BundleSchema
};

/**
 * @name exports.SlotInstanceQuery
 * @summary SlotInstance Query.
 */
module.exports.SlotInstanceQuery = {
	description: 'Get information about a single Slot',
	resolve: scopeInvariant(scopeOptions, slotInstanceResolver),
	type: SlotSchema
};
