// Schemas
const CoverageSchema = require('../../schemas/coverage.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CoverageArgs = require('../../parameters/coverage.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	coverageResolver,
	coverageListResolver,
	coverageInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Coverage',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.CoverageQuery
 * @summary Coverage Query.
 */
module.exports.CoverageQuery = {
	args: Object.assign({}, CommonArgs, CoverageArgs),
	description: 'Query for a single Coverage',
	resolve: scopeInvariant(scopeOptions, coverageResolver),
	type: CoverageSchema
};

/**
 * @name exports.CoverageListQuery
 * @summary CoverageList Query.
 */
module.exports.CoverageListQuery = {
	args: Object.assign({}, CommonArgs, CoverageArgs),
	description: 'Query for multiple Coverages',
	resolve: scopeInvariant(scopeOptions, coverageListResolver),
	type: BundleSchema
};

/**
 * @name exports.CoverageInstanceQuery
 * @summary CoverageInstance Query.
 */
module.exports.CoverageInstanceQuery = {
	description: 'Get information about a single Coverage',
	resolve: scopeInvariant(scopeOptions, coverageInstanceResolver),
	type: CoverageSchema
};
