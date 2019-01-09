// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const RiskAssessmentSchema = require('../../schemas/riskassessment.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const RiskAssessmentArgs = require('../../parameters/riskassessment.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	RiskAssessmentArgs,
);

// Resolvers
const {
	getRiskAssessment,
	getRiskAssessmentList,
	getRiskAssessmentInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'RiskAssessment',
	action: 'read',
};

/**
 * @name exports.RiskAssessmentQuery
 * @summary RiskAssessment query.
 */
module.exports.RiskAssessmentQuery = {
	description: 'Query for a single RiskAssessment',
	resolve: scopeInvariant(scopeOptions, getRiskAssessment),
	type: RiskAssessmentSchema,
	args: args,
};

/**
 * @name exports.RiskAssessmentListQuery
 * @summary RiskAssessment query.
 */
module.exports.RiskAssessmentListQuery = {
	description: 'Query for a more than or just one RiskAssessment',
	resolve: scopeInvariant(scopeOptions, getRiskAssessmentList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.RiskAssessmentInstanceQuery
 * @summary RiskAssessment query.
 */
module.exports.RiskAssessmentInstanceQuery = {
	description: 'Access information about a single RiskAssessment',
	resolve: scopeInvariant(scopeOptions, getRiskAssessmentInstance),
	type: RiskAssessmentSchema,
	args: args,
};
