// Schemas
const MeasureSchema = require('../../schemas/measure.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MeasureArgs = require('../../parameters/measure.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	measureResolver,
	measureListResolver,
	measureInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Measure',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.MeasureQuery
 * @summary Measure Query.
 */
module.exports.MeasureQuery = {
	args: Object.assign({}, CommonArgs, MeasureArgs),
	description: 'Query for a single Measure',
	resolve: scopeInvariant(scopeOptions, measureResolver),
	type: MeasureSchema,
};

/**
 * @name exports.MeasureListQuery
 * @summary MeasureList Query.
 */
module.exports.MeasureListQuery = {
	args: Object.assign({}, CommonArgs, MeasureArgs),
	description: 'Query for multiple Measures',
	resolve: scopeInvariant(scopeOptions, measureListResolver),
	type: BundleSchema,
};

/**
 * @name exports.MeasureInstanceQuery
 * @summary MeasureInstance Query.
 */
module.exports.MeasureInstanceQuery = {
	description: 'Get information about a single Measure',
	resolve: scopeInvariant(scopeOptions, measureInstanceResolver),
	type: MeasureSchema,
};
