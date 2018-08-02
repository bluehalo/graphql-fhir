// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const LibrarySchema = require('../../schemas/library.schema');

// Inputs
const LibraryInput = require('../../inputs/library.input');


const {
	libraryCreateResolver,
	libraryUpdateResolver,
	libraryDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Library record.'
	},
	resource: {
		type: LibraryInput,
		description: 'Library Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Library record for deletion.'
	}
};

/**
 * @name exports.LibraryCreateMutation
 * @summary LibraryCreate Mutation.
 */
module.exports.LibraryCreateMutation = {
	args: WriteArgs,
	description: 'Create a Library',
	resolve: libraryCreateResolver,
	type: LibrarySchema
};

/**
 * @name exports.LibraryUpdateMutation
 * @summary LibraryUpdate Mutation.
 */
module.exports.LibraryUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Librarys',
	resolve: libraryUpdateResolver,
	type: LibrarySchema
};

/**
 * @name exports.LibraryDeleteMutation
 * @summary LibraryDelete Mutation.
 */
module.exports.LibraryDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Library',
	resolve: libraryDeleteResolver,
	type: LibrarySchema
};
