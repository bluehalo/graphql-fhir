// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MediaSchema = require('../../schemas/media.schema');

// Inputs
const MediaInput = require('../../inputs/media.input');

// Resolvers
const {
	mediaCreateResolver,
	mediaUpdateResolver,
	mediaDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Media',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Media record.'
	},
	resource: {
		type: new GraphQLNonNull(MediaInput),
		description: 'Media Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Media record for deletion.'
	}
};

/**
 * @name exports.MediaCreateMutation
 * @summary MediaCreate Mutation.
 */
module.exports.MediaCreateMutation = {
	args: WriteArgs,
	description: 'Create a Media',
	resolve: scopeInvariant(scopeOptions, mediaCreateResolver),
	type: MediaSchema
};

/**
 * @name exports.MediaUpdateMutation
 * @summary MediaUpdate Mutation.
 */
module.exports.MediaUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Medias',
	resolve: scopeInvariant(scopeOptions, mediaUpdateResolver),
	type: MediaSchema
};

/**
 * @name exports.MediaDeleteMutation
 * @summary MediaDelete Mutation.
 */
module.exports.MediaDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Media',
	resolve: scopeInvariant(scopeOptions, mediaDeleteResolver),
	type: MediaSchema
};
