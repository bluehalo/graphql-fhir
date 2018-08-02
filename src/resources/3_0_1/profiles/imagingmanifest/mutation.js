// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImagingManifestSchema = require('../../schemas/imagingmanifest.schema');

// Inputs
const ImagingManifestInput = require('../../inputs/imagingmanifest.input');


const {
	imagingmanifestCreateResolver,
	imagingmanifestUpdateResolver,
	imagingmanifestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ImagingManifest record.'
	},
	resource: {
		type: ImagingManifestInput,
		description: 'ImagingManifest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ImagingManifest record for deletion.'
	}
};

/**
 * @name exports.ImagingManifestCreateMutation
 * @summary ImagingManifestCreate Mutation.
 */
module.exports.ImagingManifestCreateMutation = {
	args: WriteArgs,
	description: 'Create a ImagingManifest',
	resolve: imagingmanifestCreateResolver,
	type: ImagingManifestSchema
};

/**
 * @name exports.ImagingManifestUpdateMutation
 * @summary ImagingManifestUpdate Mutation.
 */
module.exports.ImagingManifestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ImagingManifests',
	resolve: imagingmanifestUpdateResolver,
	type: ImagingManifestSchema
};

/**
 * @name exports.ImagingManifestDeleteMutation
 * @summary ImagingManifestDelete Mutation.
 */
module.exports.ImagingManifestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ImagingManifest',
	resolve: imagingmanifestDeleteResolver,
	type: ImagingManifestSchema
};
