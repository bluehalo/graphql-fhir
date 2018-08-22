// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DocumentManifestSchema = require('../../schemas/documentmanifest.schema');

// Inputs
const DocumentManifestInput = require('../../inputs/documentmanifest.input');

// Resolvers
const {
	documentmanifestCreateResolver,
	documentmanifestUpdateResolver,
	documentmanifestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DocumentManifest',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DocumentManifest record.'
	},
	resource: {
		type: new GraphQLNonNull(DocumentManifestInput),
		description: 'DocumentManifest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, documentmanifestCreateResolver),
	type: DocumentManifestSchema
};

/**
 * @name exports.DocumentManifestUpdateMutation
 * @summary DocumentManifestUpdate Mutation.
 */
module.exports.DocumentManifestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DocumentManifests',
	resolve: scopeInvariant(scopeOptions, documentmanifestUpdateResolver),
	type: DocumentManifestSchema
};

/**
 * @name exports.DocumentManifestDeleteMutation
 * @summary DocumentManifestDelete Mutation.
 */
module.exports.DocumentManifestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DocumentManifest',
	resolve: scopeInvariant(scopeOptions, documentmanifestDeleteResolver),
	type: DocumentManifestSchema
};
