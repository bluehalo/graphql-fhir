// Schemas
const FlagSchema = require('../../schemas/flag.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const FlagArgs = require('../../parameters/flag.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	flagResolver,
	flagListResolver,
	flagInstanceResolver
} = require('./resolver');

/**
 * @name exports.FlagQuery
 * @summary Flag Query.
 */
module.exports.FlagQuery = {
	args: Object.assign({}, CommonArgs, FlagArgs),
	description: 'Query for a single Flag',
	resolve: flagResolver,
	type: FlagSchema
};

/**
 * @name exports.FlagListQuery
 * @summary FlagList Query.
 */
module.exports.FlagListQuery = {
	args: Object.assign({}, CommonArgs, FlagArgs),
	description: 'Query for multiple Flags',
	resolve: flagListResolver,
	type: BundleSchema
};

/**
 * @name exports.FlagInstanceQuery
 * @summary FlagInstance Query.
 */
module.exports.FlagInstanceQuery = {
	description: 'Get information about a single Flag',
	resolve: flagInstanceResolver,
	type: FlagSchema
};
