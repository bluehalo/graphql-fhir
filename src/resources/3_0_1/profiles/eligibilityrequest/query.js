// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EligibilityRequestSchema = require('../../schemas/eligibilityrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EligibilityRequestArgs = require('../../parameters/eligibilityrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	EligibilityRequestArgs,
);

// Resolvers
const {
	getEligibilityRequest,
	getEligibilityRequestList,
	getEligibilityRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EligibilityRequest',
	action: 'read',
};

/**
 * @name exports.EligibilityRequestQuery
 * @summary EligibilityRequest query.
 */
module.exports.EligibilityRequestQuery = {
	description: 'Query for a single EligibilityRequest',
	resolve: scopeInvariant(scopeOptions, getEligibilityRequest),
	type: EligibilityRequestSchema,
	args: args,
};

/**
 * @name exports.EligibilityRequestListQuery
 * @summary EligibilityRequest query.
 */
module.exports.EligibilityRequestListQuery = {
	description: 'Query for a more than or just one EligibilityRequest',
	resolve: scopeInvariant(scopeOptions, getEligibilityRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EligibilityRequestInstanceQuery
 * @summary EligibilityRequest query.
 */
module.exports.EligibilityRequestInstanceQuery = {
	description: 'Access information about a single EligibilityRequest',
	resolve: scopeInvariant(scopeOptions, getEligibilityRequestInstance),
	type: EligibilityRequestSchema,
	args: args,
};
