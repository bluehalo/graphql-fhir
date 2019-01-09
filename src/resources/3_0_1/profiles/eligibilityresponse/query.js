// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const EligibilityResponseSchema = require('../../schemas/eligibilityresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const EligibilityResponseArgs = require('../../parameters/eligibilityresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	EligibilityResponseArgs,
);

// Resolvers
const {
	getEligibilityResponse,
	getEligibilityResponseList,
	getEligibilityResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EligibilityResponse',
	action: 'read',
};

/**
 * @name exports.EligibilityResponseQuery
 * @summary EligibilityResponse query.
 */
module.exports.EligibilityResponseQuery = {
	description: 'Query for a single EligibilityResponse',
	resolve: scopeInvariant(scopeOptions, getEligibilityResponse),
	type: EligibilityResponseSchema,
	args: args,
};

/**
 * @name exports.EligibilityResponseListQuery
 * @summary EligibilityResponse query.
 */
module.exports.EligibilityResponseListQuery = {
	description: 'Query for a more than or just one EligibilityResponse',
	resolve: scopeInvariant(scopeOptions, getEligibilityResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.EligibilityResponseInstanceQuery
 * @summary EligibilityResponse query.
 */
module.exports.EligibilityResponseInstanceQuery = {
	description: 'Access information about a single EligibilityResponse',
	resolve: scopeInvariant(scopeOptions, getEligibilityResponseInstance),
	type: EligibilityResponseSchema,
	args: args,
};
