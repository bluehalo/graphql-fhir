// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const GraphDefinitionSchema = require('../../schemas/graphdefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const GraphDefinitionArgs = require('../../parameters/graphdefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	GraphDefinitionArgs,
);

// Resolvers
const {
	getGraphDefinition,
	getGraphDefinitionList,
	getGraphDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'GraphDefinition',
	action: 'read',
};

/**
 * @name exports.GraphDefinitionQuery
 * @summary GraphDefinition query.
 */
module.exports.GraphDefinitionQuery = {
	description: 'Query for a single GraphDefinition',
	resolve: scopeInvariant(scopeOptions, getGraphDefinition),
	type: GraphDefinitionSchema,
	args: args,
};

/**
 * @name exports.GraphDefinitionListQuery
 * @summary GraphDefinition query.
 */
module.exports.GraphDefinitionListQuery = {
	description: 'Query for a more than or just one GraphDefinition',
	resolve: scopeInvariant(scopeOptions, getGraphDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.GraphDefinitionInstanceQuery
 * @summary GraphDefinition query.
 */
module.exports.GraphDefinitionInstanceQuery = {
	description: 'Access information about a single GraphDefinition',
	resolve: scopeInvariant(scopeOptions, getGraphDefinitionInstance),
	type: GraphDefinitionSchema,
	args: args,
};
