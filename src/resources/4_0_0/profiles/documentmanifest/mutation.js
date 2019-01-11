// Schemas
const DocumentManifestSchema = require('../../schemas/documentmanifest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DocumentManifestInput = require('../../inputs/documentmanifest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDocumentManifest,
	updateDocumentManifest,
	removeDocumentManifest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DocumentManifest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DocumentManifest record.',
	},
	resource: {
		type: new GraphQLNonNull(DocumentManifestInput),
		description: 'DocumentManifest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DocumentManifest record for deletion.',
	},
};

/**
 * @name exports.DocumentManifestCreateMutation
 * @summary DocumentManifestCreate mutation.
 */
module.exports.DocumentManifestCreateMutation = {
	description: 'Create a DocumentManifest record',
	resolve: scopeInvariant(scopeOptions, createDocumentManifest),
	type: DocumentManifestSchema,
	args: WriteArgs,
};

/**
 * @name exports.DocumentManifestUpdateMutation
 * @summary DocumentManifestUpdate mutation.
 */
module.exports.DocumentManifestUpdateMutation = {
	description: 'Update a DocumentManifest record',
	resolve: scopeInvariant(scopeOptions, updateDocumentManifest),
	type: DocumentManifestSchema,
	args: WriteArgs,
};

/**
 * @name exports.DocumentManifestRemoveMutation
 * @summary DocumentManifestRemove mutation.
 */
module.exports.DocumentManifestRemoveMutation = {
	description: 'Remove a DocumentManifest record',
	resolve: scopeInvariant(scopeOptions, removeDocumentManifest),
	type: DocumentManifestSchema,
	args: DeleteArgs,
};
