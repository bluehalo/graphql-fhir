// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CoverageEligibilityResponseSchema = require('../../schemas/coverageeligibilityresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CoverageEligibilityResponseArgs = require('../../parameters/coverageeligibilityresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	CoverageEligibilityResponseArgs,
);

// Resolvers
const {
	getCoverageEligibilityResponse,
	getCoverageEligibilityResponseList,
	getCoverageEligibilityResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CoverageEligibilityResponse',
	action: 'read',
};

/**
 * @name exports.CoverageEligibilityResponseQuery
 * @summary CoverageEligibilityResponse query.
 */
module.exports.CoverageEligibilityResponseQuery = {
	description: 'Query for a single CoverageEligibilityResponse',
	resolve: scopeInvariant(scopeOptions, getCoverageEligibilityResponse),
	type: CoverageEligibilityResponseSchema,
	args: args,
};

/**
 * @name exports.CoverageEligibilityResponseListQuery
 * @summary CoverageEligibilityResponse query.
 */
module.exports.CoverageEligibilityResponseListQuery = {
	description: 'Query for a more than or just one CoverageEligibilityResponse',
	resolve: scopeInvariant(scopeOptions, getCoverageEligibilityResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CoverageEligibilityResponseInstanceQuery
 * @summary CoverageEligibilityResponse query.
 */
module.exports.CoverageEligibilityResponseInstanceQuery = {
	description: 'Access information about a single CoverageEligibilityResponse',
	resolve: scopeInvariant(scopeOptions, getCoverageEligibilityResponseInstance),
	type: CoverageEligibilityResponseSchema,
	args: args,
};
