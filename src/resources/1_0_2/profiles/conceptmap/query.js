// Schemas
const ConceptMapSchema = require('../../schemas/conceptmap.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ConceptMapArgs = require('../../parameters/conceptmap.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	conceptmapResolver,
	conceptmapListResolver,
	conceptmapInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ConceptMap',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.ConceptMapQuery
 * @summary ConceptMap Query.
 */
module.exports.ConceptMapQuery = {
	args: Object.assign({}, CommonArgs, ConceptMapArgs),
	description: 'Query for a single ConceptMap',
	resolve: scopeInvariant(scopeOptions, conceptmapResolver),
	type: ConceptMapSchema,
};

/**
 * @name exports.ConceptMapListQuery
 * @summary ConceptMapList Query.
 */
module.exports.ConceptMapListQuery = {
	args: Object.assign({}, CommonArgs, ConceptMapArgs),
	description: 'Query for multiple ConceptMaps',
	resolve: scopeInvariant(scopeOptions, conceptmapListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ConceptMapInstanceQuery
 * @summary ConceptMapInstance Query.
 */
module.exports.ConceptMapInstanceQuery = {
	description: 'Get information about a single ConceptMap',
	resolve: scopeInvariant(scopeOptions, conceptmapInstanceResolver),
	type: ConceptMapSchema,
};
