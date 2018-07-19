// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ClaimResponseSchema = require('../../schemas/claimresponse.schema');

// Arguments
const ClaimResponseArgs = require('../../parameters/claimresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	claimresponseResolver,
	claimresponseListResolver,
	claimresponseInstanceResolver
} = require('./resolver');

/**
 * @name exports.ClaimResponseQuery
 * @summary ClaimResponse Query.
 */
module.exports.ClaimResponseQuery = {
	args: Object.assign({}, CommonArgs, ClaimResponseArgs),
	description: 'Query for a single ClaimResponse',
	resolve: claimresponseResolver,
	type: ClaimResponseSchema
};

/**
 * @name exports.ClaimResponseListQuery
 * @summary ClaimResponseList Query.
 */
module.exports.ClaimResponseListQuery = {
	args: Object.assign({}, CommonArgs, ClaimResponseArgs),
	description: 'Query for multiple ClaimResponses',
	resolve: claimresponseListResolver,
	type: BundleSchema
};

/**
 * @name exports.ClaimResponseInstanceQuery
 * @summary ClaimResponseInstance Query.
 */
module.exports.ClaimResponseInstanceQuery = {
	description: 'Get information about a single ClaimResponse',
	resolve: claimresponseInstanceResolver,
	type: ClaimResponseSchema
};
