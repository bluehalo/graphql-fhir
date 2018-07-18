// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MediaSchema = require('../../schemas/media.schema');

// Inputs
const MediaInput = require('../../inputs/media.input');


const {
	mediaCreateResolver,
	mediaUpdateResolver,
	mediaDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Media record.'
	},
	resource: {
		type: MediaInput,
		description: 'Media Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: mediaCreateResolver,
	type: MediaSchema
};

/**
 * @name exports.MediaUpdateMutation
 * @summary MediaUpdate Mutation.
 */
module.exports.MediaUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Medias',
	resolve: mediaUpdateResolver,
	type: MediaSchema
};

/**
 * @name exports.MediaDeleteMutation
 * @summary MediaDelete Mutation.
 */
module.exports.MediaDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Media',
	resolve: mediaDeleteResolver,
	type: MediaSchema
};
