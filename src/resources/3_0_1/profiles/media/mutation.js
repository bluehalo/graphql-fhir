// Schemas
const MediaSchema = require('../../schemas/media.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MediaInput = require('../../inputs/media.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createMedia, updateMedia, removeMedia } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Media',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Media record.',
	},
	resource: {
		type: new GraphQLNonNull(MediaInput),
		description: 'Media Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Media record for deletion.',
	},
};

/**
 * @name exports.MediaCreateMutation
 * @summary MediaCreate mutation.
 */
module.exports.MediaCreateMutation = {
	description: 'Create a Media record',
	resolve: scopeInvariant(scopeOptions, createMedia),
	type: MediaSchema,
	args: WriteArgs,
};

/**
 * @name exports.MediaUpdateMutation
 * @summary MediaUpdate mutation.
 */
module.exports.MediaUpdateMutation = {
	description: 'Update a Media record',
	resolve: scopeInvariant(scopeOptions, updateMedia),
	type: MediaSchema,
	args: WriteArgs,
};

/**
 * @name exports.MediaRemoveMutation
 * @summary MediaRemove mutation.
 */
module.exports.MediaRemoveMutation = {
	description: 'Remove a Media record',
	resolve: scopeInvariant(scopeOptions, removeMedia),
	type: MediaSchema,
	args: DeleteArgs,
};
