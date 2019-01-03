// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const LibrarySchema = require('../../schemas/library.schema');

// Inputs
const LibraryInput = require('../../inputs/library.input');

// Resolvers
const {
	libraryCreateResolver,
	libraryUpdateResolver,
	libraryDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Library',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Library record.',
	},
	resource: {
		type: new GraphQLNonNull(LibraryInput),
		description: 'Library Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Library record for deletion.',
	},
};

/**
 * @name exports.LibraryCreateMutation
 * @summary LibraryCreate Mutation.
 */
module.exports.LibraryCreateMutation = {
	args: WriteArgs,
	description: 'Create a Library',
	resolve: scopeInvariant(scopeOptions, libraryCreateResolver),
	type: LibrarySchema,
};

/**
 * @name exports.LibraryUpdateMutation
 * @summary LibraryUpdate Mutation.
 */
module.exports.LibraryUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Librarys',
	resolve: scopeInvariant(scopeOptions, libraryUpdateResolver),
	type: LibrarySchema,
};

/**
 * @name exports.LibraryDeleteMutation
 * @summary LibraryDelete Mutation.
 */
module.exports.LibraryDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Library',
	resolve: scopeInvariant(scopeOptions, libraryDeleteResolver),
	type: LibrarySchema,
};
