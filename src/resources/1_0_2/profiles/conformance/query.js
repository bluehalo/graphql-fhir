// Schemas
const ConformanceSchema = require('../../schemas/conformance.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ConformanceArgs = require('../../parameters/conformance.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	conformanceResolver,
	conformanceListResolver,
	conformanceInstanceResolver
} = require('./resolver');

/**
 * @name exports.ConformanceQuery
 * @summary Conformance Query.
 */
module.exports.ConformanceQuery = {
	args: Object.assign({}, CommonArgs, ConformanceArgs),
	description: 'Query for a single Conformance',
	resolve: conformanceResolver,
	type: ConformanceSchema
};

/**
 * @name exports.ConformanceListQuery
 * @summary ConformanceList Query.
 */
module.exports.ConformanceListQuery = {
	args: Object.assign({}, CommonArgs, ConformanceArgs),
	description: 'Query for multiple Conformances',
	resolve: conformanceListResolver,
	type: BundleSchema
};

/**
 * @name exports.ConformanceInstanceQuery
 * @summary ConformanceInstance Query.
 */
module.exports.ConformanceInstanceQuery = {
	description: 'Get information about a single Conformance',
	resolve: conformanceInstanceResolver,
	type: ConformanceSchema
};
