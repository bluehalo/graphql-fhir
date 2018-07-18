// Schemas
const EpisodeOfCareSchema = require('../../schemas/episodeofcare.schema');

// Arguments
const EpisodeOfCareArgs = require('../../parameters/episodeofcare.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	episodeofcareResolver,
	episodeofcareListResolver,
	episodeofcareInstanceResolver
} = require('./resolver');

/**
 * @name exports.EpisodeOfCareQuery
 * @summary EpisodeOfCare Query.
 */
module.exports.EpisodeOfCareQuery = {
	args: Object.assign({}, CommonArgs, EpisodeOfCareArgs),
	description: 'Query for a single EpisodeOfCare',
	resolve: episodeofcareResolver,
	type: EpisodeOfCareSchema
};

/**
 * @name exports.EpisodeOfCareListQuery
 * @summary EpisodeOfCareList Query.
 */
module.exports.EpisodeOfCareListQuery = {
	args: Object.assign({}, CommonArgs, EpisodeOfCareArgs),
	description: 'Query for multiple EpisodeOfCares',
	resolve: episodeofcareListResolver,
	type: new GraphQLList(EpisodeOfCareSchema)
};

/**
 * @name exports.EpisodeOfCareInstanceQuery
 * @summary EpisodeOfCareInstance Query.
 */
module.exports.EpisodeOfCareInstanceQuery = {
	description: 'Get information about a single EpisodeOfCare',
	resolve: episodeofcareInstanceResolver,
	type: EpisodeOfCareSchema
};
