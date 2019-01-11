// Schemas
const EpisodeOfCareSchema = require('../../schemas/episodeofcare.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EpisodeOfCareInput = require('../../inputs/episodeofcare.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEpisodeOfCare,
	updateEpisodeOfCare,
	removeEpisodeOfCare,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EpisodeOfCare',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EpisodeOfCare record.',
	},
	resource: {
		type: new GraphQLNonNull(EpisodeOfCareInput),
		description: 'EpisodeOfCare Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EpisodeOfCare record for deletion.',
	},
};

/**
 * @name exports.EpisodeOfCareCreateMutation
 * @summary EpisodeOfCareCreate mutation.
 */
module.exports.EpisodeOfCareCreateMutation = {
	description: 'Create a EpisodeOfCare record',
	resolve: scopeInvariant(scopeOptions, createEpisodeOfCare),
	type: EpisodeOfCareSchema,
	args: WriteArgs,
};

/**
 * @name exports.EpisodeOfCareUpdateMutation
 * @summary EpisodeOfCareUpdate mutation.
 */
module.exports.EpisodeOfCareUpdateMutation = {
	description: 'Update a EpisodeOfCare record',
	resolve: scopeInvariant(scopeOptions, updateEpisodeOfCare),
	type: EpisodeOfCareSchema,
	args: WriteArgs,
};

/**
 * @name exports.EpisodeOfCareRemoveMutation
 * @summary EpisodeOfCareRemove mutation.
 */
module.exports.EpisodeOfCareRemoveMutation = {
	description: 'Remove a EpisodeOfCare record',
	resolve: scopeInvariant(scopeOptions, removeEpisodeOfCare),
	type: EpisodeOfCareSchema,
	args: DeleteArgs,
};
