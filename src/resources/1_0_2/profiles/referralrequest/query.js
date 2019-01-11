// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ReferralRequestSchema = require('../../schemas/referralrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ReferralRequestArgs = require('../../parameters/referralrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ReferralRequestArgs);

// Resolvers
const {
	getReferralRequest,
	getReferralRequestList,
	getReferralRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ReferralRequest',
	action: 'read',
};

/**
 * @name exports.ReferralRequestQuery
 * @summary ReferralRequest query.
 */
module.exports.ReferralRequestQuery = {
	description: 'Query for a single ReferralRequest',
	resolve: scopeInvariant(scopeOptions, getReferralRequest),
	type: ReferralRequestSchema,
	args: args,
};

/**
 * @name exports.ReferralRequestListQuery
 * @summary ReferralRequest query.
 */
module.exports.ReferralRequestListQuery = {
	description: 'Query for a more than or just one ReferralRequest',
	resolve: scopeInvariant(scopeOptions, getReferralRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ReferralRequestInstanceQuery
 * @summary ReferralRequest query.
 */
module.exports.ReferralRequestInstanceQuery = {
	description: 'Access information about a single ReferralRequest',
	resolve: scopeInvariant(scopeOptions, getReferralRequestInstance),
	type: ReferralRequestSchema,
	args: args,
};
