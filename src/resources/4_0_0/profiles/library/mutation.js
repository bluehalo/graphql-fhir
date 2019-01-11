// Schemas
const LibrarySchema = require('../../schemas/library.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const LibraryInput = require('../../inputs/library.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createLibrary, updateLibrary, removeLibrary } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Library',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Library record.',
	},
	resource: {
		type: new GraphQLNonNull(LibraryInput),
		description: 'Library Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Library record for deletion.',
	},
};

/**
 * @name exports.LibraryCreateMutation
 * @summary LibraryCreate mutation.
 */
module.exports.LibraryCreateMutation = {
	description: 'Create a Library record',
	resolve: scopeInvariant(scopeOptions, createLibrary),
	type: LibrarySchema,
	args: WriteArgs,
};

/**
 * @name exports.LibraryUpdateMutation
 * @summary LibraryUpdate mutation.
 */
module.exports.LibraryUpdateMutation = {
	description: 'Update a Library record',
	resolve: scopeInvariant(scopeOptions, updateLibrary),
	type: LibrarySchema,
	args: WriteArgs,
};

/**
 * @name exports.LibraryRemoveMutation
 * @summary LibraryRemove mutation.
 */
module.exports.LibraryRemoveMutation = {
	description: 'Remove a Library record',
	resolve: scopeInvariant(scopeOptions, removeLibrary),
	type: LibrarySchema,
	args: DeleteArgs,
};
