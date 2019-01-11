// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const InsurancePlanSchema = require('../../schemas/insuranceplan.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const InsurancePlanArgs = require('../../parameters/insuranceplan.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	InsurancePlanArgs,
);

// Resolvers
const {
	getInsurancePlan,
	getInsurancePlanList,
	getInsurancePlanInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'InsurancePlan',
	action: 'read',
};

/**
 * @name exports.InsurancePlanQuery
 * @summary InsurancePlan query.
 */
module.exports.InsurancePlanQuery = {
	description: 'Query for a single InsurancePlan',
	resolve: scopeInvariant(scopeOptions, getInsurancePlan),
	type: InsurancePlanSchema,
	args: args,
};

/**
 * @name exports.InsurancePlanListQuery
 * @summary InsurancePlan query.
 */
module.exports.InsurancePlanListQuery = {
	description: 'Query for a more than or just one InsurancePlan',
	resolve: scopeInvariant(scopeOptions, getInsurancePlanList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.InsurancePlanInstanceQuery
 * @summary InsurancePlan query.
 */
module.exports.InsurancePlanInstanceQuery = {
	description: 'Access information about a single InsurancePlan',
	resolve: scopeInvariant(scopeOptions, getInsurancePlanInstance),
	type: InsurancePlanSchema,
	args: args,
};
