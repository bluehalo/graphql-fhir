// Schemas
const EligibilityResponseSchema = require('../../schemas/eligibilityresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EligibilityResponseArgs = require('../../parameters/eligibilityresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	eligibilityresponseResolver,
	eligibilityresponseListResolver,
	eligibilityresponseInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EligibilityResponse',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.EligibilityResponseQuery
 * @summary EligibilityResponse Query.
 */
module.exports.EligibilityResponseQuery = {
	args: Object.assign({}, CommonArgs, EligibilityResponseArgs),
	description: 'Query for a single EligibilityResponse',
	resolve: scopeInvariant(scopeOptions, eligibilityresponseResolver),
	type: EligibilityResponseSchema,
};

/**
 * @name exports.EligibilityResponseListQuery
 * @summary EligibilityResponseList Query.
 */
module.exports.EligibilityResponseListQuery = {
	args: Object.assign({}, CommonArgs, EligibilityResponseArgs),
	description: 'Query for multiple EligibilityResponses',
	resolve: scopeInvariant(scopeOptions, eligibilityresponseListResolver),
	type: BundleSchema,
};

/**
 * @name exports.EligibilityResponseInstanceQuery
 * @summary EligibilityResponseInstance Query.
 */
module.exports.EligibilityResponseInstanceQuery = {
	description: 'Get information about a single EligibilityResponse',
	resolve: scopeInvariant(scopeOptions, eligibilityresponseInstanceResolver),
	type: EligibilityResponseSchema,
};
