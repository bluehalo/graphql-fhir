// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ResearchSubjectSchema = require('../../schemas/researchsubject.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ResearchSubjectArgs = require('../../parameters/researchsubject.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ResearchSubjectArgs,
);

// Resolvers
const {
	getResearchSubject,
	getResearchSubjectList,
	getResearchSubjectInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchSubject',
	action: 'read',
};

/**
 * @name exports.ResearchSubjectQuery
 * @summary ResearchSubject query.
 */
module.exports.ResearchSubjectQuery = {
	description: 'Query for a single ResearchSubject',
	resolve: scopeInvariant(scopeOptions, getResearchSubject),
	type: ResearchSubjectSchema,
	args: args,
};

/**
 * @name exports.ResearchSubjectListQuery
 * @summary ResearchSubject query.
 */
module.exports.ResearchSubjectListQuery = {
	description: 'Query for a more than or just one ResearchSubject',
	resolve: scopeInvariant(scopeOptions, getResearchSubjectList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ResearchSubjectInstanceQuery
 * @summary ResearchSubject query.
 */
module.exports.ResearchSubjectInstanceQuery = {
	description: 'Access information about a single ResearchSubject',
	resolve: scopeInvariant(scopeOptions, getResearchSubjectInstance),
	type: ResearchSubjectSchema,
	args: args,
};
