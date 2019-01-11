// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ExplanationOfBenefitSchema = require('../../schemas/explanationofbenefit.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ExplanationOfBenefitArgs = require('../../parameters/explanationofbenefit.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ExplanationOfBenefitArgs,
);

// Resolvers
const {
	getExplanationOfBenefit,
	getExplanationOfBenefitList,
	getExplanationOfBenefitInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ExplanationOfBenefit',
	action: 'read',
};

/**
 * @name exports.ExplanationOfBenefitQuery
 * @summary ExplanationOfBenefit query.
 */
module.exports.ExplanationOfBenefitQuery = {
	description: 'Query for a single ExplanationOfBenefit',
	resolve: scopeInvariant(scopeOptions, getExplanationOfBenefit),
	type: ExplanationOfBenefitSchema,
	args: args,
};

/**
 * @name exports.ExplanationOfBenefitListQuery
 * @summary ExplanationOfBenefit query.
 */
module.exports.ExplanationOfBenefitListQuery = {
	description: 'Query for a more than or just one ExplanationOfBenefit',
	resolve: scopeInvariant(scopeOptions, getExplanationOfBenefitList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ExplanationOfBenefitInstanceQuery
 * @summary ExplanationOfBenefit query.
 */
module.exports.ExplanationOfBenefitInstanceQuery = {
	description: 'Access information about a single ExplanationOfBenefit',
	resolve: scopeInvariant(scopeOptions, getExplanationOfBenefitInstance),
	type: ExplanationOfBenefitSchema,
	args: args,
};
