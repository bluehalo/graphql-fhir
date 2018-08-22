// Schemas
const ConformanceSchema = require('../../schemas/conformance.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ConformanceArgs = require('../../parameters/conformance.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	conformanceResolver,
	conformanceListResolver,
	conformanceInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Conformance',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.ConformanceQuery
 * @summary Conformance Query.
 */
module.exports.ConformanceQuery = {
	args: Object.assign({}, CommonArgs, ConformanceArgs),
	description: 'Query for a single Conformance',
	resolve: scopeInvariant(scopeOptions, conformanceResolver),
	type: ConformanceSchema
};

/**
 * @name exports.ConformanceListQuery
 * @summary ConformanceList Query.
 */
module.exports.ConformanceListQuery = {
	args: Object.assign({}, CommonArgs, ConformanceArgs),
	description: 'Query for multiple Conformances',
	resolve: scopeInvariant(scopeOptions, conformanceListResolver),
	type: BundleSchema
};

/**
 * @name exports.ConformanceInstanceQuery
 * @summary ConformanceInstance Query.
 */
module.exports.ConformanceInstanceQuery = {
	description: 'Get information about a single Conformance',
	resolve: scopeInvariant(scopeOptions, conformanceInstanceResolver),
	type: ConformanceSchema
};
