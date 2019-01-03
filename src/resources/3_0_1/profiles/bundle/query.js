// Schemas
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const BundleArgs = require('../../parameters/bundle.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	bundleResolver,
	bundleListResolver,
	bundleInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Bundle',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.BundleQuery
 * @summary Bundle Query.
 */
module.exports.BundleQuery = {
	args: Object.assign({}, CommonArgs, BundleArgs),
	description: 'Query for a single Bundle',
	resolve: scopeInvariant(scopeOptions, bundleResolver),
	type: BundleSchema,
};

/**
 * @name exports.BundleListQuery
 * @summary BundleList Query.
 */
module.exports.BundleListQuery = {
	args: Object.assign({}, CommonArgs, BundleArgs),
	description: 'Query for multiple Bundles',
	resolve: scopeInvariant(scopeOptions, bundleListResolver),
	type: BundleSchema,
};

/**
 * @name exports.BundleInstanceQuery
 * @summary BundleInstance Query.
 */
module.exports.BundleInstanceQuery = {
	description: 'Get information about a single Bundle',
	resolve: scopeInvariant(scopeOptions, bundleInstanceResolver),
	type: BundleSchema,
};
