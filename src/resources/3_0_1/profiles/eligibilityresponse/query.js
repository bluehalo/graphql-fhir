// Schemas
const EligibilityResponseSchema = require('../../schemas/eligibilityresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EligibilityResponseArgs = require('../../parameters/eligibilityresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	eligibilityresponseResolver,
	eligibilityresponseListResolver,
	eligibilityresponseInstanceResolver
} = require('./resolver');

/**
 * @name exports.EligibilityResponseQuery
 * @summary EligibilityResponse Query.
 */
module.exports.EligibilityResponseQuery = {
	args: Object.assign({}, CommonArgs, EligibilityResponseArgs),
	description: 'Query for a single EligibilityResponse',
	resolve: eligibilityresponseResolver,
	type: EligibilityResponseSchema
};

/**
 * @name exports.EligibilityResponseListQuery
 * @summary EligibilityResponseList Query.
 */
module.exports.EligibilityResponseListQuery = {
	args: Object.assign({}, CommonArgs, EligibilityResponseArgs),
	description: 'Query for multiple EligibilityResponses',
	resolve: eligibilityresponseListResolver,
	type: BundleSchema
};

/**
 * @name exports.EligibilityResponseInstanceQuery
 * @summary EligibilityResponseInstance Query.
 */
module.exports.EligibilityResponseInstanceQuery = {
	description: 'Get information about a single EligibilityResponse',
	resolve: eligibilityresponseInstanceResolver,
	type: EligibilityResponseSchema
};
