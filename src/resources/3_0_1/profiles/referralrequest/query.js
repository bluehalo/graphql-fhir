// Schemas
const ReferralRequestSchema = require('../../schemas/referralrequest.schema');

// Arguments
const ReferralRequestArgs = require('../../parameters/referralrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	referralrequestResolver,
	referralrequestListResolver,
	referralrequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.ReferralRequestQuery
 * @summary ReferralRequest Query.
 */
module.exports.ReferralRequestQuery = {
	args: Object.assign({}, CommonArgs, ReferralRequestArgs),
	description: 'Query for a single ReferralRequest',
	resolve: referralrequestResolver,
	type: ReferralRequestSchema
};

/**
 * @name exports.ReferralRequestListQuery
 * @summary ReferralRequestList Query.
 */
module.exports.ReferralRequestListQuery = {
	args: Object.assign({}, CommonArgs, ReferralRequestArgs),
	description: 'Query for multiple ReferralRequests',
	resolve: referralrequestListResolver,
	type: new GraphQLList(ReferralRequestSchema)
};

/**
 * @name exports.ReferralRequestInstanceQuery
 * @summary ReferralRequestInstance Query.
 */
module.exports.ReferralRequestInstanceQuery = {
	description: 'Get information about a single ReferralRequest',
	resolve: referralrequestInstanceResolver,
	type: ReferralRequestSchema
};
