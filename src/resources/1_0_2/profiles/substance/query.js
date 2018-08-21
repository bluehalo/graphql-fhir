// Schemas
const SubstanceSchema = require('../../schemas/substance.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SubstanceArgs = require('../../parameters/substance.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	substanceResolver,
	substanceListResolver,
	substanceInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Substance',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.SubstanceQuery
 * @summary Substance Query.
 */
module.exports.SubstanceQuery = {
	args: Object.assign({}, CommonArgs, SubstanceArgs),
	description: 'Query for a single Substance',
	resolve: scopeInvariant(scopeOptions, substanceResolver),
	type: SubstanceSchema
};

/**
 * @name exports.SubstanceListQuery
 * @summary SubstanceList Query.
 */
module.exports.SubstanceListQuery = {
	args: Object.assign({}, CommonArgs, SubstanceArgs),
	description: 'Query for multiple Substances',
	resolve: scopeInvariant(scopeOptions, substanceListResolver),
	type: BundleSchema
};

/**
 * @name exports.SubstanceInstanceQuery
 * @summary SubstanceInstance Query.
 */
module.exports.SubstanceInstanceQuery = {
	description: 'Get information about a single Substance',
	resolve: scopeInvariant(scopeOptions, substanceInstanceResolver),
	type: SubstanceSchema
};
