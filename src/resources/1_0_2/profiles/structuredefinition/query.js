// Schemas
const StructureDefinitionSchema = require('../../schemas/structuredefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const StructureDefinitionArgs = require('../../parameters/structuredefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	structuredefinitionResolver,
	structuredefinitionListResolver,
	structuredefinitionInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'StructureDefinition',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.StructureDefinitionQuery
 * @summary StructureDefinition Query.
 */
module.exports.StructureDefinitionQuery = {
	args: Object.assign({}, CommonArgs, StructureDefinitionArgs),
	description: 'Query for a single StructureDefinition',
	resolve: scopeInvariant(scopeOptions, structuredefinitionResolver),
	type: StructureDefinitionSchema,
};

/**
 * @name exports.StructureDefinitionListQuery
 * @summary StructureDefinitionList Query.
 */
module.exports.StructureDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, StructureDefinitionArgs),
	description: 'Query for multiple StructureDefinitions',
	resolve: scopeInvariant(scopeOptions, structuredefinitionListResolver),
	type: BundleSchema,
};

/**
 * @name exports.StructureDefinitionInstanceQuery
 * @summary StructureDefinitionInstance Query.
 */
module.exports.StructureDefinitionInstanceQuery = {
	description: 'Get information about a single StructureDefinition',
	resolve: scopeInvariant(scopeOptions, structuredefinitionInstanceResolver),
	type: StructureDefinitionSchema,
};
