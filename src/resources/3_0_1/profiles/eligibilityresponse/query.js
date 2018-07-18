// Schemas
const EligibilityResponseSchema = require('../../schemas/eligibilityresponse.schema');

// Arguments
const EligibilityResponseArgs = require('../../parameters/eligibilityresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

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
	type: new GraphQLList(EligibilityResponseSchema)
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
