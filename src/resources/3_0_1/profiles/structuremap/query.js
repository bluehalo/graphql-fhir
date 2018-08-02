// Schemas
const StructureMapSchema = require('../../schemas/structuremap.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const StructureMapArgs = require('../../parameters/structuremap.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	structuremapResolver,
	structuremapListResolver,
	structuremapInstanceResolver
} = require('./resolver');

/**
 * @name exports.StructureMapQuery
 * @summary StructureMap Query.
 */
module.exports.StructureMapQuery = {
	args: Object.assign({}, CommonArgs, StructureMapArgs),
	description: 'Query for a single StructureMap',
	resolve: structuremapResolver,
	type: StructureMapSchema
};

/**
 * @name exports.StructureMapListQuery
 * @summary StructureMapList Query.
 */
module.exports.StructureMapListQuery = {
	args: Object.assign({}, CommonArgs, StructureMapArgs),
	description: 'Query for multiple StructureMaps',
	resolve: structuremapListResolver,
	type: BundleSchema
};

/**
 * @name exports.StructureMapInstanceQuery
 * @summary StructureMapInstance Query.
 */
module.exports.StructureMapInstanceQuery = {
	description: 'Get information about a single StructureMap',
	resolve: structuremapInstanceResolver,
	type: StructureMapSchema
};
