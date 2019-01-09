// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DocumentManifestSchema = require('../../schemas/documentmanifest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DocumentManifestArgs = require('../../parameters/documentmanifest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	DocumentManifestArgs,
);

// Resolvers
const {
	getDocumentManifest,
	getDocumentManifestList,
	getDocumentManifestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DocumentManifest',
	action: 'read',
};

/**
 * @name exports.DocumentManifestQuery
 * @summary DocumentManifest query.
 */
module.exports.DocumentManifestQuery = {
	description: 'Query for a single DocumentManifest',
	resolve: scopeInvariant(scopeOptions, getDocumentManifest),
	type: DocumentManifestSchema,
	args: args,
};

/**
 * @name exports.DocumentManifestListQuery
 * @summary DocumentManifest query.
 */
module.exports.DocumentManifestListQuery = {
	description: 'Query for a more than or just one DocumentManifest',
	resolve: scopeInvariant(scopeOptions, getDocumentManifestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DocumentManifestInstanceQuery
 * @summary DocumentManifest query.
 */
module.exports.DocumentManifestInstanceQuery = {
	description: 'Access information about a single DocumentManifest',
	resolve: scopeInvariant(scopeOptions, getDocumentManifestInstance),
	type: DocumentManifestSchema,
	args: args,
};
