// Schemas
const ImmunizationRecommendationSchema = require('../../schemas/immunizationrecommendation.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ImmunizationRecommendationArgs = require('../../parameters/immunizationrecommendation.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	immunizationrecommendationResolver,
	immunizationrecommendationListResolver,
	immunizationrecommendationInstanceResolver
} = require('./resolver');

/**
 * @name exports.ImmunizationRecommendationQuery
 * @summary ImmunizationRecommendation Query.
 */
module.exports.ImmunizationRecommendationQuery = {
	args: Object.assign({}, CommonArgs, ImmunizationRecommendationArgs),
	description: 'Query for a single ImmunizationRecommendation',
	resolve: immunizationrecommendationResolver,
	type: ImmunizationRecommendationSchema
};

/**
 * @name exports.ImmunizationRecommendationListQuery
 * @summary ImmunizationRecommendationList Query.
 */
module.exports.ImmunizationRecommendationListQuery = {
	args: Object.assign({}, CommonArgs, ImmunizationRecommendationArgs),
	description: 'Query for multiple ImmunizationRecommendations',
	resolve: immunizationrecommendationListResolver,
	type: BundleSchema
};

/**
 * @name exports.ImmunizationRecommendationInstanceQuery
 * @summary ImmunizationRecommendationInstance Query.
 */
module.exports.ImmunizationRecommendationInstanceQuery = {
	description: 'Get information about a single ImmunizationRecommendation',
	resolve: immunizationrecommendationInstanceResolver,
	type: ImmunizationRecommendationSchema
};
