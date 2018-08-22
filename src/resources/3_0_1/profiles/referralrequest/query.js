// Schemas
const ReferralRequestSchema = require('../../schemas/referralrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ReferralRequestArgs = require('../../parameters/referralrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	referralrequestResolver,
	referralrequestListResolver,
	referralrequestInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ReferralRequest',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ReferralRequestQuery
 * @summary ReferralRequest Query.
 */
module.exports.ReferralRequestQuery = {
	args: Object.assign({}, CommonArgs, ReferralRequestArgs),
	description: 'Query for a single ReferralRequest',
	resolve: scopeInvariant(scopeOptions, referralrequestResolver),
	type: ReferralRequestSchema
};

/**
 * @name exports.ReferralRequestListQuery
 * @summary ReferralRequestList Query.
 */
module.exports.ReferralRequestListQuery = {
	args: Object.assign({}, CommonArgs, ReferralRequestArgs),
	description: 'Query for multiple ReferralRequests',
	resolve: scopeInvariant(scopeOptions, referralrequestListResolver),
	type: BundleSchema
};

/**
 * @name exports.ReferralRequestInstanceQuery
 * @summary ReferralRequestInstance Query.
 */
module.exports.ReferralRequestInstanceQuery = {
	description: 'Get information about a single ReferralRequest',
	resolve: scopeInvariant(scopeOptions, referralrequestInstanceResolver),
	type: ReferralRequestSchema
};
