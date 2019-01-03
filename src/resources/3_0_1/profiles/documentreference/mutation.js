// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DocumentReferenceSchema = require('../../schemas/documentreference.schema');

// Inputs
const DocumentReferenceInput = require('../../inputs/documentreference.input');

// Resolvers
const {
	documentreferenceCreateResolver,
	documentreferenceUpdateResolver,
	documentreferenceDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DocumentReference',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a DocumentReference record for deletion.',
	},
};

/**
 * @name exports.DocumentReferenceCreateMutation
 * @summary DocumentReferenceCreate Mutation.
 */
module.exports.DocumentReferenceCreateMutation = {
	args: WriteArgs,
	description: 'Create a DocumentReference',
	resolve: scopeInvariant(scopeOptions, documentreferenceCreateResolver),
	type: DocumentReferenceSchema,
};

/**
 * @name exports.DocumentReferenceUpdateMutation
 * @summary DocumentReferenceUpdate Mutation.
 */
module.exports.DocumentReferenceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DocumentReferences',
	resolve: scopeInvariant(scopeOptions, documentreferenceUpdateResolver),
	type: DocumentReferenceSchema,
};

/**
 * @name exports.DocumentReferenceDeleteMutation
 * @summary DocumentReferenceDelete Mutation.
 */
module.exports.DocumentReferenceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DocumentReference',
	resolve: scopeInvariant(scopeOptions, documentreferenceDeleteResolver),
	type: DocumentReferenceSchema,
};
