// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ResearchElementDefinitionSchema = require('../../schemas/researchelementdefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ResearchElementDefinitionArgs = require('../../parameters/researchelementdefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ResearchElementDefinitionArgs,
);

// Resolvers
const {
	getResearchElementDefinition,
	getResearchElementDefinitionList,
	getResearchElementDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchElementDefinition',
	action: 'read',
};

/**
 * @name exports.ResearchElementDefinitionQuery
 * @summary ResearchElementDefinition query.
 */
module.exports.ResearchElementDefinitionQuery = {
	description: 'Query for a single ResearchElementDefinition',
	resolve: scopeInvariant(scopeOptions, getResearchElementDefinition),
	type: ResearchElementDefinitionSchema,
	args: args,
};

/**
 * @name exports.ResearchElementDefinitionListQuery
 * @summary ResearchElementDefinition query.
 */
module.exports.ResearchElementDefinitionListQuery = {
	description: 'Query for a more than or just one ResearchElementDefinition',
	resolve: scopeInvariant(scopeOptions, getResearchElementDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ResearchElementDefinitionInstanceQuery
 * @summary ResearchElementDefinition query.
 */
module.exports.ResearchElementDefinitionInstanceQuery = {
	description: 'Access information about a single ResearchElementDefinition',
	resolve: scopeInvariant(scopeOptions, getResearchElementDefinitionInstance),
	type: ResearchElementDefinitionSchema,
	args: args,
};
