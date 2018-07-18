// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DocumentManifestSchema = require('../../schemas/documentmanifest.schema');

// Inputs
const DocumentManifestInput = require('../../inputs/documentmanifest.input');


const {
	documentmanifestCreateResolver,
	documentmanifestUpdateResolver,
	documentmanifestDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DocumentManifest record.'
	},
	resource: {
		type: DocumentManifestInput,
		description: 'DocumentManifest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DocumentManifest record for deletion.'
	}
};

/**
 * @name exports.DocumentManifestCreateMutation
 * @summary DocumentManifestCreate Mutation.
 */
module.exports.DocumentManifestCreateMutation = {
	args: WriteArgs,
	description: 'Create a DocumentManifest',
	resolve: documentmanifestCreateResolver,
	type: DocumentManifestSchema
};

/**
 * @name exports.DocumentManifestUpdateMutation
 * @summary DocumentManifestUpdate Mutation.
 */
module.exports.DocumentManifestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DocumentManifests',
	resolve: documentmanifestUpdateResolver,
	type: DocumentManifestSchema
};

/**
 * @name exports.DocumentManifestDeleteMutation
 * @summary DocumentManifestDelete Mutation.
 */
module.exports.DocumentManifestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DocumentManifest',
	resolve: documentmanifestDeleteResolver,
	type: DocumentManifestSchema
};
