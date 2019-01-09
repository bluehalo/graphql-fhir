// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CoverageEligibilityRequestSchema = require('../../schemas/coverageeligibilityrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CoverageEligibilityRequestArgs = require('../../parameters/coverageeligibilityrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	CoverageEligibilityRequestArgs,
);

// Resolvers
const {
	getCoverageEligibilityRequest,
	getCoverageEligibilityRequestList,
	getCoverageEligibilityRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CoverageEligibilityRequest',
	action: 'read',
};

/**
 * @name exports.CoverageEligibilityRequestQuery
 * @summary CoverageEligibilityRequest query.
 */
module.exports.CoverageEligibilityRequestQuery = {
	description: 'Query for a single CoverageEligibilityRequest',
	resolve: scopeInvariant(scopeOptions, getCoverageEligibilityRequest),
	type: CoverageEligibilityRequestSchema,
	args: args,
};

/**
 * @name exports.CoverageEligibilityRequestListQuery
 * @summary CoverageEligibilityRequest query.
 */
module.exports.CoverageEligibilityRequestListQuery = {
	description: 'Query for a more than or just one CoverageEligibilityRequest',
	resolve: scopeInvariant(scopeOptions, getCoverageEligibilityRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CoverageEligibilityRequestInstanceQuery
 * @summary CoverageEligibilityRequest query.
 */
module.exports.CoverageEligibilityRequestInstanceQuery = {
	description: 'Access information about a single CoverageEligibilityRequest',
	resolve: scopeInvariant(scopeOptions, getCoverageEligibilityRequestInstance),
	type: CoverageEligibilityRequestSchema,
	args: args,
};
