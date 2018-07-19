// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const SubstanceSchema = require('../../schemas/substance.schema');

// Arguments
const SubstanceArgs = require('../../parameters/substance.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	substanceResolver,
	substanceListResolver,
	substanceInstanceResolver
} = require('./resolver');

/**
 * @name exports.SubstanceQuery
 * @summary Substance Query.
 */
module.exports.SubstanceQuery = {
	args: Object.assign({}, CommonArgs, SubstanceArgs),
	description: 'Query for a single Substance',
	resolve: substanceResolver,
	type: SubstanceSchema
};

/**
 * @name exports.SubstanceListQuery
 * @summary SubstanceList Query.
 */
module.exports.SubstanceListQuery = {
	args: Object.assign({}, CommonArgs, SubstanceArgs),
	description: 'Query for multiple Substances',
	resolve: substanceListResolver,
	type: BundleSchema
};

/**
 * @name exports.SubstanceInstanceQuery
 * @summary SubstanceInstance Query.
 */
module.exports.SubstanceInstanceQuery = {
	description: 'Get information about a single Substance',
	resolve: substanceInstanceResolver,
	type: SubstanceSchema
};
