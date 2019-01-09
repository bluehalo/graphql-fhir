// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SpecimenDefinitionSchema = require('../../schemas/specimendefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SpecimenDefinitionArgs = require('../../parameters/specimendefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	SpecimenDefinitionArgs,
);

// Resolvers
const {
	getSpecimenDefinition,
	getSpecimenDefinitionList,
	getSpecimenDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SpecimenDefinition',
	action: 'read',
};

/**
 * @name exports.SpecimenDefinitionQuery
 * @summary SpecimenDefinition query.
 */
module.exports.SpecimenDefinitionQuery = {
	description: 'Query for a single SpecimenDefinition',
	resolve: scopeInvariant(scopeOptions, getSpecimenDefinition),
	type: SpecimenDefinitionSchema,
	args: args,
};

/**
 * @name exports.SpecimenDefinitionListQuery
 * @summary SpecimenDefinition query.
 */
module.exports.SpecimenDefinitionListQuery = {
	description: 'Query for a more than or just one SpecimenDefinition',
	resolve: scopeInvariant(scopeOptions, getSpecimenDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SpecimenDefinitionInstanceQuery
 * @summary SpecimenDefinition query.
 */
module.exports.SpecimenDefinitionInstanceQuery = {
	description: 'Access information about a single SpecimenDefinition',
	resolve: scopeInvariant(scopeOptions, getSpecimenDefinitionInstance),
	type: SpecimenDefinitionSchema,
	args: args,
};
