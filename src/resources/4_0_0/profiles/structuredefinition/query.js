// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const StructureDefinitionSchema = require('../../schemas/structuredefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const StructureDefinitionArgs = require('../../parameters/structuredefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	StructureDefinitionArgs,
);

// Resolvers
const {
	getStructureDefinition,
	getStructureDefinitionList,
	getStructureDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'StructureDefinition',
	action: 'read',
};

/**
 * @name exports.StructureDefinitionQuery
 * @summary StructureDefinition query.
 */
module.exports.StructureDefinitionQuery = {
	description: 'Query for a single StructureDefinition',
	resolve: scopeInvariant(scopeOptions, getStructureDefinition),
	type: StructureDefinitionSchema,
	args: args,
};

/**
 * @name exports.StructureDefinitionListQuery
 * @summary StructureDefinition query.
 */
module.exports.StructureDefinitionListQuery = {
	description: 'Query for a more than or just one StructureDefinition',
	resolve: scopeInvariant(scopeOptions, getStructureDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.StructureDefinitionInstanceQuery
 * @summary StructureDefinition query.
 */
module.exports.StructureDefinitionInstanceQuery = {
	description: 'Access information about a single StructureDefinition',
	resolve: scopeInvariant(scopeOptions, getStructureDefinitionInstance),
	type: StructureDefinitionSchema,
	args: args,
};
