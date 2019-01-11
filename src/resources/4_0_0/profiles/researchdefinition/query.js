// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ResearchDefinitionSchema = require('../../schemas/researchdefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ResearchDefinitionArgs = require('../../parameters/researchdefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ResearchDefinitionArgs,
);

// Resolvers
const {
	getResearchDefinition,
	getResearchDefinitionList,
	getResearchDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchDefinition',
	action: 'read',
};

/**
 * @name exports.ResearchDefinitionQuery
 * @summary ResearchDefinition query.
 */
module.exports.ResearchDefinitionQuery = {
	description: 'Query for a single ResearchDefinition',
	resolve: scopeInvariant(scopeOptions, getResearchDefinition),
	type: ResearchDefinitionSchema,
	args: args,
};

/**
 * @name exports.ResearchDefinitionListQuery
 * @summary ResearchDefinition query.
 */
module.exports.ResearchDefinitionListQuery = {
	description: 'Query for a more than or just one ResearchDefinition',
	resolve: scopeInvariant(scopeOptions, getResearchDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ResearchDefinitionInstanceQuery
 * @summary ResearchDefinition query.
 */
module.exports.ResearchDefinitionInstanceQuery = {
	description: 'Access information about a single ResearchDefinition',
	resolve: scopeInvariant(scopeOptions, getResearchDefinitionInstance),
	type: ResearchDefinitionSchema,
	args: args,
};
