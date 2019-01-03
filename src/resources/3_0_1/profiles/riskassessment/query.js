// Schemas
const RiskAssessmentSchema = require('../../schemas/riskassessment.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const RiskAssessmentArgs = require('../../parameters/riskassessment.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	riskassessmentResolver,
	riskassessmentListResolver,
	riskassessmentInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'RiskAssessment',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.RiskAssessmentQuery
 * @summary RiskAssessment Query.
 */
module.exports.RiskAssessmentQuery = {
	args: Object.assign({}, CommonArgs, RiskAssessmentArgs),
	description: 'Query for a single RiskAssessment',
	resolve: scopeInvariant(scopeOptions, riskassessmentResolver),
	type: RiskAssessmentSchema,
};

/**
 * @name exports.RiskAssessmentListQuery
 * @summary RiskAssessmentList Query.
 */
module.exports.RiskAssessmentListQuery = {
	args: Object.assign({}, CommonArgs, RiskAssessmentArgs),
	description: 'Query for multiple RiskAssessments',
	resolve: scopeInvariant(scopeOptions, riskassessmentListResolver),
	type: BundleSchema,
};

/**
 * @name exports.RiskAssessmentInstanceQuery
 * @summary RiskAssessmentInstance Query.
 */
module.exports.RiskAssessmentInstanceQuery = {
	description: 'Get information about a single RiskAssessment',
	resolve: scopeInvariant(scopeOptions, riskassessmentInstanceResolver),
	type: RiskAssessmentSchema,
};
