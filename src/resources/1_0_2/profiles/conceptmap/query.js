// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ConceptMapSchema = require('../../schemas/conceptmap.schema');

// Arguments
const ConceptMapArgs = require('../../parameters/conceptmap.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	conceptmapResolver,
	conceptmapListResolver,
	conceptmapInstanceResolver
} = require('./resolver');

/**
 * @name exports.ConceptMapQuery
 * @summary ConceptMap Query.
 */
module.exports.ConceptMapQuery = {
	args: Object.assign({}, CommonArgs, ConceptMapArgs),
	description: 'Query for a single ConceptMap',
	resolve: conceptmapResolver,
	type: ConceptMapSchema
};

/**
 * @name exports.ConceptMapListQuery
 * @summary ConceptMapList Query.
 */
module.exports.ConceptMapListQuery = {
	args: Object.assign({}, CommonArgs, ConceptMapArgs),
	description: 'Query for multiple ConceptMaps',
	resolve: conceptmapListResolver,
	type: BundleSchema
};

/**
 * @name exports.ConceptMapInstanceQuery
 * @summary ConceptMapInstance Query.
 */
module.exports.ConceptMapInstanceQuery = {
	description: 'Get information about a single ConceptMap',
	resolve: conceptmapInstanceResolver,
	type: ConceptMapSchema
};
