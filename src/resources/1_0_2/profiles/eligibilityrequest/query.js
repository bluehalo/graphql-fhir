// Schemas
const EligibilityRequestSchema = require('../../schemas/eligibilityrequest.schema');

// Arguments
const EligibilityRequestArgs = require('../../parameters/eligibilityrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	eligibilityrequestResolver,
	eligibilityrequestListResolver,
	eligibilityrequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.EligibilityRequestQuery
 * @summary EligibilityRequest Query.
 */
module.exports.EligibilityRequestQuery = {
	args: Object.assign({}, CommonArgs, EligibilityRequestArgs),
	description: 'Query for a single EligibilityRequest',
	resolve: eligibilityrequestResolver,
	type: EligibilityRequestSchema
};

/**
 * @name exports.EligibilityRequestListQuery
 * @summary EligibilityRequestList Query.
 */
module.exports.EligibilityRequestListQuery = {
	args: Object.assign({}, CommonArgs, EligibilityRequestArgs),
	description: 'Query for multiple EligibilityRequests',
	resolve: eligibilityrequestListResolver,
	type: new GraphQLList(EligibilityRequestSchema)
};

/**
 * @name exports.EligibilityRequestInstanceQuery
 * @summary EligibilityRequestInstance Query.
 */
module.exports.EligibilityRequestInstanceQuery = {
	description: 'Get information about a single EligibilityRequest',
	resolve: eligibilityrequestInstanceResolver,
	type: EligibilityRequestSchema
};
