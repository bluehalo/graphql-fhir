// Schemas
const ExplanationOfBenefitSchema = require('../../schemas/explanationofbenefit.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ExplanationOfBenefitArgs = require('../../parameters/explanationofbenefit.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	explanationofbenefitResolver,
	explanationofbenefitListResolver,
	explanationofbenefitInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ExplanationOfBenefit',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ExplanationOfBenefitQuery
 * @summary ExplanationOfBenefit Query.
 */
module.exports.ExplanationOfBenefitQuery = {
	args: Object.assign({}, CommonArgs, ExplanationOfBenefitArgs),
	description: 'Query for a single ExplanationOfBenefit',
	resolve: scopeInvariant(scopeOptions, explanationofbenefitResolver),
	type: ExplanationOfBenefitSchema,
};

/**
 * @name exports.ExplanationOfBenefitListQuery
 * @summary ExplanationOfBenefitList Query.
 */
module.exports.ExplanationOfBenefitListQuery = {
	args: Object.assign({}, CommonArgs, ExplanationOfBenefitArgs),
	description: 'Query for multiple ExplanationOfBenefits',
	resolve: scopeInvariant(scopeOptions, explanationofbenefitListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ExplanationOfBenefitInstanceQuery
 * @summary ExplanationOfBenefitInstance Query.
 */
module.exports.ExplanationOfBenefitInstanceQuery = {
	description: 'Get information about a single ExplanationOfBenefit',
	resolve: scopeInvariant(scopeOptions, explanationofbenefitInstanceResolver),
	type: ExplanationOfBenefitSchema,
};
