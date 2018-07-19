// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const SlotSchema = require('../../schemas/slot.schema');

// Arguments
const SlotArgs = require('../../parameters/slot.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	slotResolver,
	slotListResolver,
	slotInstanceResolver
} = require('./resolver');

/**
 * @name exports.SlotQuery
 * @summary Slot Query.
 */
module.exports.SlotQuery = {
	args: Object.assign({}, CommonArgs, SlotArgs),
	description: 'Query for a single Slot',
	resolve: slotResolver,
	type: SlotSchema
};

/**
 * @name exports.SlotListQuery
 * @summary SlotList Query.
 */
module.exports.SlotListQuery = {
	args: Object.assign({}, CommonArgs, SlotArgs),
	description: 'Query for multiple Slots',
	resolve: slotListResolver,
	type: BundleSchema
};

/**
 * @name exports.SlotInstanceQuery
 * @summary SlotInstance Query.
 */
module.exports.SlotInstanceQuery = {
	description: 'Get information about a single Slot',
	resolve: slotInstanceResolver,
	type: SlotSchema
};
