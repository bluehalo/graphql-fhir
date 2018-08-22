// Schemas
const StructureMapSchema = require('../../schemas/structuremap.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const StructureMapArgs = require('../../parameters/structuremap.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	structuremapResolver,
	structuremapListResolver,
	structuremapInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'StructureMap',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.StructureMapQuery
 * @summary StructureMap Query.
 */
module.exports.StructureMapQuery = {
	args: Object.assign({}, CommonArgs, StructureMapArgs),
	description: 'Query for a single StructureMap',
	resolve: scopeInvariant(scopeOptions, structuremapResolver),
	type: StructureMapSchema
};

/**
 * @name exports.StructureMapListQuery
 * @summary StructureMapList Query.
 */
module.exports.StructureMapListQuery = {
	args: Object.assign({}, CommonArgs, StructureMapArgs),
	description: 'Query for multiple StructureMaps',
	resolve: scopeInvariant(scopeOptions, structuremapListResolver),
	type: BundleSchema
};

/**
 * @name exports.StructureMapInstanceQuery
 * @summary StructureMapInstance Query.
 */
module.exports.StructureMapInstanceQuery = {
	description: 'Get information about a single StructureMap',
	resolve: scopeInvariant(scopeOptions, structuremapInstanceResolver),
	type: StructureMapSchema
};
