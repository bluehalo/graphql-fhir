// Schemas
const EpisodeOfCareSchema = require('../../schemas/episodeofcare.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const EpisodeOfCareArgs = require('../../parameters/episodeofcare.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	episodeofcareResolver,
	episodeofcareListResolver,
	episodeofcareInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EpisodeOfCare',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.EpisodeOfCareQuery
 * @summary EpisodeOfCare Query.
 */
module.exports.EpisodeOfCareQuery = {
	args: Object.assign({}, CommonArgs, EpisodeOfCareArgs),
	description: 'Query for a single EpisodeOfCare',
	resolve: scopeInvariant(scopeOptions, episodeofcareResolver),
	type: EpisodeOfCareSchema
};

/**
 * @name exports.EpisodeOfCareListQuery
 * @summary EpisodeOfCareList Query.
 */
module.exports.EpisodeOfCareListQuery = {
	args: Object.assign({}, CommonArgs, EpisodeOfCareArgs),
	description: 'Query for multiple EpisodeOfCares',
	resolve: scopeInvariant(scopeOptions, episodeofcareListResolver),
	type: BundleSchema
};

/**
 * @name exports.EpisodeOfCareInstanceQuery
 * @summary EpisodeOfCareInstance Query.
 */
module.exports.EpisodeOfCareInstanceQuery = {
	description: 'Get information about a single EpisodeOfCare',
	resolve: scopeInvariant(scopeOptions, episodeofcareInstanceResolver),
	type: EpisodeOfCareSchema
};
