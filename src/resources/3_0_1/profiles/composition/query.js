// Schemas
const CompositionSchema = require('../../schemas/composition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CompositionArgs = require('../../parameters/composition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	compositionResolver,
	compositionListResolver,
	compositionInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Composition',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.CompositionQuery
 * @summary Composition Query.
 */
module.exports.CompositionQuery = {
	args: Object.assign({}, CommonArgs, CompositionArgs),
	description: 'Query for a single Composition',
	resolve: scopeInvariant(scopeOptions, compositionResolver),
	type: CompositionSchema
};

/**
 * @name exports.CompositionListQuery
 * @summary CompositionList Query.
 */
module.exports.CompositionListQuery = {
	args: Object.assign({}, CommonArgs, CompositionArgs),
	description: 'Query for multiple Compositions',
	resolve: scopeInvariant(scopeOptions, compositionListResolver),
	type: BundleSchema
};

/**
 * @name exports.CompositionInstanceQuery
 * @summary CompositionInstance Query.
 */
module.exports.CompositionInstanceQuery = {
	description: 'Get information about a single Composition',
	resolve: scopeInvariant(scopeOptions, compositionInstanceResolver),
	type: CompositionSchema
};
