// Schemas
const ClaimResponseSchema = require('../../schemas/claimresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ClaimResponseArgs = require('../../parameters/claimresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	claimresponseResolver,
	claimresponseListResolver,
	claimresponseInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ClaimResponse',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.ClaimResponseQuery
 * @summary ClaimResponse Query.
 */
module.exports.ClaimResponseQuery = {
	args: Object.assign({}, CommonArgs, ClaimResponseArgs),
	description: 'Query for a single ClaimResponse',
	resolve: scopeInvariant(scopeOptions, claimresponseResolver),
	type: ClaimResponseSchema,
};

/**
 * @name exports.ClaimResponseListQuery
 * @summary ClaimResponseList Query.
 */
module.exports.ClaimResponseListQuery = {
	args: Object.assign({}, CommonArgs, ClaimResponseArgs),
	description: 'Query for multiple ClaimResponses',
	resolve: scopeInvariant(scopeOptions, claimresponseListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ClaimResponseInstanceQuery
 * @summary ClaimResponseInstance Query.
 */
module.exports.ClaimResponseInstanceQuery = {
	description: 'Get information about a single ClaimResponse',
	resolve: scopeInvariant(scopeOptions, claimresponseInstanceResolver),
	type: ClaimResponseSchema,
};
