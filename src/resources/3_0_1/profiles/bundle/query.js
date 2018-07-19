// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const BundleArgs = require('../../parameters/bundle.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	bundleResolver,
	bundleListResolver,
	bundleInstanceResolver
} = require('./resolver');

/**
 * @name exports.BundleQuery
 * @summary Bundle Query.
 */
module.exports.BundleQuery = {
	args: Object.assign({}, CommonArgs, BundleArgs),
	description: 'Query for a single Bundle',
	resolve: bundleResolver,
	type: BundleSchema
};

/**
 * @name exports.BundleListQuery
 * @summary BundleList Query.
 */
module.exports.BundleListQuery = {
	args: Object.assign({}, CommonArgs, BundleArgs),
	description: 'Query for multiple Bundles',
	resolve: bundleListResolver,
	type: BundleSchema
};

/**
 * @name exports.BundleInstanceQuery
 * @summary BundleInstance Query.
 */
module.exports.BundleInstanceQuery = {
	description: 'Get information about a single Bundle',
	resolve: bundleInstanceResolver,
	type: BundleSchema
};
