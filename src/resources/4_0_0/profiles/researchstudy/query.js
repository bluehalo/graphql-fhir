// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ResearchStudySchema = require('../../schemas/researchstudy.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ResearchStudyArgs = require('../../parameters/researchstudy.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ResearchStudyArgs,
);

// Resolvers
const {
	getResearchStudy,
	getResearchStudyList,
	getResearchStudyInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ResearchStudy',
	action: 'read',
};

/**
 * @name exports.ResearchStudyQuery
 * @summary ResearchStudy query.
 */
module.exports.ResearchStudyQuery = {
	description: 'Query for a single ResearchStudy',
	resolve: scopeInvariant(scopeOptions, getResearchStudy),
	type: ResearchStudySchema,
	args: args,
};

/**
 * @name exports.ResearchStudyListQuery
 * @summary ResearchStudy query.
 */
module.exports.ResearchStudyListQuery = {
	description: 'Query for a more than or just one ResearchStudy',
	resolve: scopeInvariant(scopeOptions, getResearchStudyList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ResearchStudyInstanceQuery
 * @summary ResearchStudy query.
 */
module.exports.ResearchStudyInstanceQuery = {
	description: 'Access information about a single ResearchStudy',
	resolve: scopeInvariant(scopeOptions, getResearchStudyInstance),
	type: ResearchStudySchema,
	args: args,
};
