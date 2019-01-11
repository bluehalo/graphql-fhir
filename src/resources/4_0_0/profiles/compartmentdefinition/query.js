// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CompartmentDefinitionSchema = require('../../schemas/compartmentdefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CompartmentDefinitionArgs = require('../../parameters/compartmentdefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	CompartmentDefinitionArgs,
);

// Resolvers
const {
	getCompartmentDefinition,
	getCompartmentDefinitionList,
	getCompartmentDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CompartmentDefinition',
	action: 'read',
};

/**
 * @name exports.CompartmentDefinitionQuery
 * @summary CompartmentDefinition query.
 */
module.exports.CompartmentDefinitionQuery = {
	description: 'Query for a single CompartmentDefinition',
	resolve: scopeInvariant(scopeOptions, getCompartmentDefinition),
	type: CompartmentDefinitionSchema,
	args: args,
};

/**
 * @name exports.CompartmentDefinitionListQuery
 * @summary CompartmentDefinition query.
 */
module.exports.CompartmentDefinitionListQuery = {
	description: 'Query for a more than or just one CompartmentDefinition',
	resolve: scopeInvariant(scopeOptions, getCompartmentDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CompartmentDefinitionInstanceQuery
 * @summary CompartmentDefinition query.
 */
module.exports.CompartmentDefinitionInstanceQuery = {
	description: 'Access information about a single CompartmentDefinition',
	resolve: scopeInvariant(scopeOptions, getCompartmentDefinitionInstance),
	type: CompartmentDefinitionSchema,
	args: args,
};
