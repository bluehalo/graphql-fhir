// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const RiskEvidenceSynthesisSchema = require('../../schemas/riskevidencesynthesis.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const RiskEvidenceSynthesisArgs = require('../../parameters/riskevidencesynthesis.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	RiskEvidenceSynthesisArgs,
);

// Resolvers
const {
	getRiskEvidenceSynthesis,
	getRiskEvidenceSynthesisList,
	getRiskEvidenceSynthesisInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RiskEvidenceSynthesis',
	action: 'read',
};

/**
 * @name exports.RiskEvidenceSynthesisQuery
 * @summary RiskEvidenceSynthesis query.
 */
module.exports.RiskEvidenceSynthesisQuery = {
	description: 'Query for a single RiskEvidenceSynthesis',
	resolve: scopeInvariant(scopeOptions, getRiskEvidenceSynthesis),
	type: RiskEvidenceSynthesisSchema,
	args: args,
};

/**
 * @name exports.RiskEvidenceSynthesisListQuery
 * @summary RiskEvidenceSynthesis query.
 */
module.exports.RiskEvidenceSynthesisListQuery = {
	description: 'Query for a more than or just one RiskEvidenceSynthesis',
	resolve: scopeInvariant(scopeOptions, getRiskEvidenceSynthesisList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.RiskEvidenceSynthesisInstanceQuery
 * @summary RiskEvidenceSynthesis query.
 */
module.exports.RiskEvidenceSynthesisInstanceQuery = {
	description: 'Access information about a single RiskEvidenceSynthesis',
	resolve: scopeInvariant(scopeOptions, getRiskEvidenceSynthesisInstance),
	type: RiskEvidenceSynthesisSchema,
	args: args,
};
