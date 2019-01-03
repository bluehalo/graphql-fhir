// Schemas
const ImmunizationRecommendationSchema = require('../../schemas/immunizationrecommendation.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ImmunizationRecommendationArgs = require('../../parameters/immunizationrecommendation.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	immunizationrecommendationResolver,
	immunizationrecommendationListResolver,
	immunizationrecommendationInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ImmunizationRecommendation',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ImmunizationRecommendationQuery
 * @summary ImmunizationRecommendation Query.
 */
module.exports.ImmunizationRecommendationQuery = {
	args: Object.assign({}, CommonArgs, ImmunizationRecommendationArgs),
	description: 'Query for a single ImmunizationRecommendation',
	resolve: scopeInvariant(scopeOptions, immunizationrecommendationResolver),
	type: ImmunizationRecommendationSchema,
};

/**
 * @name exports.ImmunizationRecommendationListQuery
 * @summary ImmunizationRecommendationList Query.
 */
module.exports.ImmunizationRecommendationListQuery = {
	args: Object.assign({}, CommonArgs, ImmunizationRecommendationArgs),
	description: 'Query for multiple ImmunizationRecommendations',
	resolve: scopeInvariant(scopeOptions, immunizationrecommendationListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ImmunizationRecommendationInstanceQuery
 * @summary ImmunizationRecommendationInstance Query.
 */
module.exports.ImmunizationRecommendationInstanceQuery = {
	description: 'Get information about a single ImmunizationRecommendation',
	resolve: scopeInvariant(
		scopeOptions,
		immunizationrecommendationInstanceResolver,
	),
	type: ImmunizationRecommendationSchema,
};
