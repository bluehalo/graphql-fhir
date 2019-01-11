// Schemas
const DocumentReferenceSchema = require('../../schemas/documentreference.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DocumentReferenceInput = require('../../inputs/documentreference.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDocumentReference,
	updateDocumentReference,
	removeDocumentReference,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DocumentReference',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DocumentReference record.',
	},
	resource: {
		type: new GraphQLNonNull(DocumentReferenceInput),
		description: 'DocumentReference Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DocumentReference record for deletion.',
	},
};

/**
 * @name exports.DocumentReferenceCreateMutation
 * @summary DocumentReferenceCreate mutation.
 */
module.exports.DocumentReferenceCreateMutation = {
	description: 'Create a DocumentReference record',
	resolve: scopeInvariant(scopeOptions, createDocumentReference),
	type: DocumentReferenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.DocumentReferenceUpdateMutation
 * @summary DocumentReferenceUpdate mutation.
 */
module.exports.DocumentReferenceUpdateMutation = {
	description: 'Update a DocumentReference record',
	resolve: scopeInvariant(scopeOptions, updateDocumentReference),
	type: DocumentReferenceSchema,
	args: WriteArgs,
};

/**
 * @name exports.DocumentReferenceRemoveMutation
 * @summary DocumentReferenceRemove mutation.
 */
module.exports.DocumentReferenceRemoveMutation = {
	description: 'Remove a DocumentReference record',
	resolve: scopeInvariant(scopeOptions, removeDocumentReference),
	type: DocumentReferenceSchema,
	args: DeleteArgs,
};
