// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const PlanDefinitionSchema = require('../../schemas/plandefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const PlanDefinitionArgs = require('../../parameters/plandefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	PlanDefinitionArgs,
);

// Resolvers
const {
	getPlanDefinition,
	getPlanDefinitionList,
	getPlanDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PlanDefinition',
	action: 'read',
};

/**
 * @name exports.PlanDefinitionQuery
 * @summary PlanDefinition query.
 */
module.exports.PlanDefinitionQuery = {
	description: 'Query for a single PlanDefinition',
	resolve: scopeInvariant(scopeOptions, getPlanDefinition),
	type: PlanDefinitionSchema,
	args: args,
};

/**
 * @name exports.PlanDefinitionListQuery
 * @summary PlanDefinition query.
 */
module.exports.PlanDefinitionListQuery = {
	description: 'Query for a more than or just one PlanDefinition',
	resolve: scopeInvariant(scopeOptions, getPlanDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.PlanDefinitionInstanceQuery
 * @summary PlanDefinition query.
 */
module.exports.PlanDefinitionInstanceQuery = {
	description: 'Access information about a single PlanDefinition',
	resolve: scopeInvariant(scopeOptions, getPlanDefinitionInstance),
	type: PlanDefinitionSchema,
	args: args,
};
