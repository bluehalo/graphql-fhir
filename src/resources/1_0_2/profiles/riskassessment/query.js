// Schemas
const RiskAssessmentSchema = require('../../schemas/riskassessment.schema');

// Arguments
const RiskAssessmentArgs = require('../../parameters/riskassessment.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	riskassessmentResolver,
	riskassessmentListResolver,
	riskassessmentInstanceResolver
} = require('./resolver');

/**
 * @name exports.RiskAssessmentQuery
 * @summary RiskAssessment Query.
 */
module.exports.RiskAssessmentQuery = {
	args: Object.assign({}, CommonArgs, RiskAssessmentArgs),
	description: 'Query for a single RiskAssessment',
	resolve: riskassessmentResolver,
	type: RiskAssessmentSchema
};

/**
 * @name exports.RiskAssessmentListQuery
 * @summary RiskAssessmentList Query.
 */
module.exports.RiskAssessmentListQuery = {
	args: Object.assign({}, CommonArgs, RiskAssessmentArgs),
	description: 'Query for multiple RiskAssessments',
	resolve: riskassessmentListResolver,
	type: new GraphQLList(RiskAssessmentSchema)
};

/**
 * @name exports.RiskAssessmentInstanceQuery
 * @summary RiskAssessmentInstance Query.
 */
module.exports.RiskAssessmentInstanceQuery = {
	description: 'Get information about a single RiskAssessment',
	resolve: riskassessmentInstanceResolver,
	type: RiskAssessmentSchema
};
