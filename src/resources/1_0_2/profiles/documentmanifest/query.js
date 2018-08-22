// Schemas
const DocumentManifestSchema = require('../../schemas/documentmanifest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DocumentManifestArgs = require('../../parameters/documentmanifest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	documentmanifestResolver,
	documentmanifestListResolver,
	documentmanifestInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DocumentManifest',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.DocumentManifestQuery
 * @summary DocumentManifest Query.
 */
module.exports.DocumentManifestQuery = {
	args: Object.assign({}, CommonArgs, DocumentManifestArgs),
	description: 'Query for a single DocumentManifest',
	resolve: scopeInvariant(scopeOptions, documentmanifestResolver),
	type: DocumentManifestSchema
};

/**
 * @name exports.DocumentManifestListQuery
 * @summary DocumentManifestList Query.
 */
module.exports.DocumentManifestListQuery = {
	args: Object.assign({}, CommonArgs, DocumentManifestArgs),
	description: 'Query for multiple DocumentManifests',
	resolve: scopeInvariant(scopeOptions, documentmanifestListResolver),
	type: BundleSchema
};

/**
 * @name exports.DocumentManifestInstanceQuery
 * @summary DocumentManifestInstance Query.
 */
module.exports.DocumentManifestInstanceQuery = {
	description: 'Get information about a single DocumentManifest',
	resolve: scopeInvariant(scopeOptions, documentmanifestInstanceResolver),
	type: DocumentManifestSchema
};
