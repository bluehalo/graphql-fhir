// Schemas
const ImagingManifestSchema = require('../../schemas/imagingmanifest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ImagingManifestInput = require('../../inputs/imagingmanifest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createImagingManifest,
	updateImagingManifest,
	removeImagingManifest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImagingManifest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ImagingManifest record.',
	},
	resource: {
		type: new GraphQLNonNull(ImagingManifestInput),
		description: 'ImagingManifest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ImagingManifest record for deletion.',
	},
};

/**
 * @name exports.ImagingManifestCreateMutation
 * @summary ImagingManifestCreate mutation.
 */
module.exports.ImagingManifestCreateMutation = {
	description: 'Create a ImagingManifest record',
	resolve: scopeInvariant(scopeOptions, createImagingManifest),
	type: ImagingManifestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImagingManifestUpdateMutation
 * @summary ImagingManifestUpdate mutation.
 */
module.exports.ImagingManifestUpdateMutation = {
	description: 'Update a ImagingManifest record',
	resolve: scopeInvariant(scopeOptions, updateImagingManifest),
	type: ImagingManifestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImagingManifestRemoveMutation
 * @summary ImagingManifestRemove mutation.
 */
module.exports.ImagingManifestRemoveMutation = {
	description: 'Remove a ImagingManifest record',
	resolve: scopeInvariant(scopeOptions, removeImagingManifest),
	type: ImagingManifestSchema,
	args: DeleteArgs,
};
