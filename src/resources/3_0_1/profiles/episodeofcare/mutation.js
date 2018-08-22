// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const EpisodeOfCareSchema = require('../../schemas/episodeofcare.schema');

// Inputs
const EpisodeOfCareInput = require('../../inputs/episodeofcare.input');

// Resolvers
const {
	episodeofcareCreateResolver,
	episodeofcareUpdateResolver,
	episodeofcareDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'EpisodeOfCare',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a EpisodeOfCare record.'
	},
	resource: {
		type: new GraphQLNonNull(EpisodeOfCareInput),
		description: 'EpisodeOfCare Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a EpisodeOfCare record for deletion.'
	}
};

/**
 * @name exports.EpisodeOfCareCreateMutation
 * @summary EpisodeOfCareCreate Mutation.
 */
module.exports.EpisodeOfCareCreateMutation = {
	args: WriteArgs,
	description: 'Create a EpisodeOfCare',
	resolve: scopeInvariant(scopeOptions, episodeofcareCreateResolver),
	type: EpisodeOfCareSchema
};

/**
 * @name exports.EpisodeOfCareUpdateMutation
 * @summary EpisodeOfCareUpdate Mutation.
 */
module.exports.EpisodeOfCareUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple EpisodeOfCares',
	resolve: scopeInvariant(scopeOptions, episodeofcareUpdateResolver),
	type: EpisodeOfCareSchema
};

/**
 * @name exports.EpisodeOfCareDeleteMutation
 * @summary EpisodeOfCareDelete Mutation.
 */
module.exports.EpisodeOfCareDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single EpisodeOfCare',
	resolve: scopeInvariant(scopeOptions, episodeofcareDeleteResolver),
	type: EpisodeOfCareSchema
};
