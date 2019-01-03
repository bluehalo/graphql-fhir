// Schemas
const EligibilityRequestSchema = require('../../schemas/eligibilityrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EligibilityRequestArgs = require('../../parameters/eligibilityrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	eligibilityrequestResolver,
	eligibilityrequestListResolver,
	eligibilityrequestInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EligibilityRequest',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.EligibilityRequestQuery
 * @summary EligibilityRequest Query.
 */
module.exports.EligibilityRequestQuery = {
	args: Object.assign({}, CommonArgs, EligibilityRequestArgs),
	description: 'Query for a single EligibilityRequest',
	resolve: scopeInvariant(scopeOptions, eligibilityrequestResolver),
	type: EligibilityRequestSchema,
};

/**
 * @name exports.EligibilityRequestListQuery
 * @summary EligibilityRequestList Query.
 */
module.exports.EligibilityRequestListQuery = {
	args: Object.assign({}, CommonArgs, EligibilityRequestArgs),
	description: 'Query for multiple EligibilityRequests',
	resolve: scopeInvariant(scopeOptions, eligibilityrequestListResolver),
	type: BundleSchema,
};

/**
 * @name exports.EligibilityRequestInstanceQuery
 * @summary EligibilityRequestInstance Query.
 */
module.exports.EligibilityRequestInstanceQuery = {
	description: 'Get information about a single EligibilityRequest',
	resolve: scopeInvariant(scopeOptions, eligibilityrequestInstanceResolver),
	type: EligibilityRequestSchema,
};
