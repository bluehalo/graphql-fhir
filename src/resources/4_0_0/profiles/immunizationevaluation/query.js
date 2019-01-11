// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ImmunizationEvaluationSchema = require('../../schemas/immunizationevaluation.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ImmunizationEvaluationArgs = require('../../parameters/immunizationevaluation.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ImmunizationEvaluationArgs,
);

// Resolvers
const {
	getImmunizationEvaluation,
	getImmunizationEvaluationList,
	getImmunizationEvaluationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImmunizationEvaluation',
	action: 'read',
};

/**
 * @name exports.ImmunizationEvaluationQuery
 * @summary ImmunizationEvaluation query.
 */
module.exports.ImmunizationEvaluationQuery = {
	description: 'Query for a single ImmunizationEvaluation',
	resolve: scopeInvariant(scopeOptions, getImmunizationEvaluation),
	type: ImmunizationEvaluationSchema,
	args: args,
};

/**
 * @name exports.ImmunizationEvaluationListQuery
 * @summary ImmunizationEvaluation query.
 */
module.exports.ImmunizationEvaluationListQuery = {
	description: 'Query for a more than or just one ImmunizationEvaluation',
	resolve: scopeInvariant(scopeOptions, getImmunizationEvaluationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ImmunizationEvaluationInstanceQuery
 * @summary ImmunizationEvaluation query.
 */
module.exports.ImmunizationEvaluationInstanceQuery = {
	description: 'Access information about a single ImmunizationEvaluation',
	resolve: scopeInvariant(scopeOptions, getImmunizationEvaluationInstance),
	type: ImmunizationEvaluationSchema,
	args: args,
};
