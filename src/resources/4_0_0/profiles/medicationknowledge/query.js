// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicationKnowledgeSchema = require('../../schemas/medicationknowledge.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicationKnowledgeArgs = require('../../parameters/medicationknowledge.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicationKnowledgeArgs,
);

// Resolvers
const {
	getMedicationKnowledge,
	getMedicationKnowledgeList,
	getMedicationKnowledgeInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationKnowledge',
	action: 'read',
};

/**
 * @name exports.MedicationKnowledgeQuery
 * @summary MedicationKnowledge query.
 */
module.exports.MedicationKnowledgeQuery = {
	description: 'Query for a single MedicationKnowledge',
	resolve: scopeInvariant(scopeOptions, getMedicationKnowledge),
	type: MedicationKnowledgeSchema,
	args: args,
};

/**
 * @name exports.MedicationKnowledgeListQuery
 * @summary MedicationKnowledge query.
 */
module.exports.MedicationKnowledgeListQuery = {
	description: 'Query for a more than or just one MedicationKnowledge',
	resolve: scopeInvariant(scopeOptions, getMedicationKnowledgeList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicationKnowledgeInstanceQuery
 * @summary MedicationKnowledge query.
 */
module.exports.MedicationKnowledgeInstanceQuery = {
	description: 'Access information about a single MedicationKnowledge',
	resolve: scopeInvariant(scopeOptions, getMedicationKnowledgeInstance),
	type: MedicationKnowledgeSchema,
	args: args,
};
