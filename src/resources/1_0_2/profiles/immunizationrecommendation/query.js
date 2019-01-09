// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ImmunizationRecommendationSchema = require('../../schemas/immunizationrecommendation.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ImmunizationRecommendationArgs = require('../../parameters/immunizationrecommendation.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ImmunizationRecommendationArgs);

// Resolvers
const {
	getImmunizationRecommendation,
	getImmunizationRecommendationList,
	getImmunizationRecommendationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImmunizationRecommendation',
	action: 'read',
};

/**
 * @name exports.ImmunizationRecommendationQuery
 * @summary ImmunizationRecommendation query.
 */
module.exports.ImmunizationRecommendationQuery = {
	description: 'Query for a single ImmunizationRecommendation',
	resolve: scopeInvariant(scopeOptions, getImmunizationRecommendation),
	type: ImmunizationRecommendationSchema,
	args: args,
};

/**
 * @name exports.ImmunizationRecommendationListQuery
 * @summary ImmunizationRecommendation query.
 */
module.exports.ImmunizationRecommendationListQuery = {
	description: 'Query for a more than or just one ImmunizationRecommendation',
	resolve: scopeInvariant(scopeOptions, getImmunizationRecommendationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ImmunizationRecommendationInstanceQuery
 * @summary ImmunizationRecommendation query.
 */
module.exports.ImmunizationRecommendationInstanceQuery = {
	description: 'Access information about a single ImmunizationRecommendation',
	resolve: scopeInvariant(scopeOptions, getImmunizationRecommendationInstance),
	type: ImmunizationRecommendationSchema,
	args: args,
};
