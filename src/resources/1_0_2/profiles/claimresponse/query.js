// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ClaimResponseSchema = require('../../schemas/claimresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ClaimResponseArgs = require('../../parameters/claimresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ClaimResponseArgs);

// Resolvers
const {
	getClaimResponse,
	getClaimResponseList,
	getClaimResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ClaimResponse',
	action: 'read',
};

/**
 * @name exports.ClaimResponseQuery
 * @summary ClaimResponse query.
 */
module.exports.ClaimResponseQuery = {
	description: 'Query for a single ClaimResponse',
	resolve: scopeInvariant(scopeOptions, getClaimResponse),
	type: ClaimResponseSchema,
	args: args,
};

/**
 * @name exports.ClaimResponseListQuery
 * @summary ClaimResponse query.
 */
module.exports.ClaimResponseListQuery = {
	description: 'Query for a more than or just one ClaimResponse',
	resolve: scopeInvariant(scopeOptions, getClaimResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ClaimResponseInstanceQuery
 * @summary ClaimResponse query.
 */
module.exports.ClaimResponseInstanceQuery = {
	description: 'Access information about a single ClaimResponse',
	resolve: scopeInvariant(scopeOptions, getClaimResponseInstance),
	type: ClaimResponseSchema,
	args: args,
};
