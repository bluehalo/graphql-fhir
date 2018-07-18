// Schemas
const DocumentManifestSchema = require('../../schemas/documentmanifest.schema');

// Arguments
const DocumentManifestArgs = require('../../parameters/documentmanifest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	documentmanifestResolver,
	documentmanifestListResolver,
	documentmanifestInstanceResolver
} = require('./resolver');

/**
 * @name exports.DocumentManifestQuery
 * @summary DocumentManifest Query.
 */
module.exports.DocumentManifestQuery = {
	args: Object.assign({}, CommonArgs, DocumentManifestArgs),
	description: 'Query for a single DocumentManifest',
	resolve: documentmanifestResolver,
	type: DocumentManifestSchema
};

/**
 * @name exports.DocumentManifestListQuery
 * @summary DocumentManifestList Query.
 */
module.exports.DocumentManifestListQuery = {
	args: Object.assign({}, CommonArgs, DocumentManifestArgs),
	description: 'Query for multiple DocumentManifests',
	resolve: documentmanifestListResolver,
	type: new GraphQLList(DocumentManifestSchema)
};

/**
 * @name exports.DocumentManifestInstanceQuery
 * @summary DocumentManifestInstance Query.
 */
module.exports.DocumentManifestInstanceQuery = {
	description: 'Get information about a single DocumentManifest',
	resolve: documentmanifestInstanceResolver,
	type: DocumentManifestSchema
};
