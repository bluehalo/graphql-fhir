// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ExplanationOfBenefitSchema = require('../../schemas/explanationofbenefit.schema');

// Arguments
const ExplanationOfBenefitArgs = require('../../parameters/explanationofbenefit.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	explanationofbenefitResolver,
	explanationofbenefitListResolver,
	explanationofbenefitInstanceResolver
} = require('./resolver');

/**
 * @name exports.ExplanationOfBenefitQuery
 * @summary ExplanationOfBenefit Query.
 */
module.exports.ExplanationOfBenefitQuery = {
	args: Object.assign({}, CommonArgs, ExplanationOfBenefitArgs),
	description: 'Query for a single ExplanationOfBenefit',
	resolve: explanationofbenefitResolver,
	type: ExplanationOfBenefitSchema
};

/**
 * @name exports.ExplanationOfBenefitListQuery
 * @summary ExplanationOfBenefitList Query.
 */
module.exports.ExplanationOfBenefitListQuery = {
	args: Object.assign({}, CommonArgs, ExplanationOfBenefitArgs),
	description: 'Query for multiple ExplanationOfBenefits',
	resolve: explanationofbenefitListResolver,
	type: BundleSchema
};

/**
 * @name exports.ExplanationOfBenefitInstanceQuery
 * @summary ExplanationOfBenefitInstance Query.
 */
module.exports.ExplanationOfBenefitInstanceQuery = {
	description: 'Get information about a single ExplanationOfBenefit',
	resolve: explanationofbenefitInstanceResolver,
	type: ExplanationOfBenefitSchema
};
