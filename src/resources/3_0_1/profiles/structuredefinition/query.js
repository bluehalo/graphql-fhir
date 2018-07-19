// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const StructureDefinitionSchema = require('../../schemas/structuredefinition.schema');

// Arguments
const StructureDefinitionArgs = require('../../parameters/structuredefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	structuredefinitionResolver,
	structuredefinitionListResolver,
	structuredefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.StructureDefinitionQuery
 * @summary StructureDefinition Query.
 */
module.exports.StructureDefinitionQuery = {
	args: Object.assign({}, CommonArgs, StructureDefinitionArgs),
	description: 'Query for a single StructureDefinition',
	resolve: structuredefinitionResolver,
	type: StructureDefinitionSchema
};

/**
 * @name exports.StructureDefinitionListQuery
 * @summary StructureDefinitionList Query.
 */
module.exports.StructureDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, StructureDefinitionArgs),
	description: 'Query for multiple StructureDefinitions',
	resolve: structuredefinitionListResolver,
	type: BundleSchema
};

/**
 * @name exports.StructureDefinitionInstanceQuery
 * @summary StructureDefinitionInstance Query.
 */
module.exports.StructureDefinitionInstanceQuery = {
	description: 'Get information about a single StructureDefinition',
	resolve: structuredefinitionInstanceResolver,
	type: StructureDefinitionSchema
};
