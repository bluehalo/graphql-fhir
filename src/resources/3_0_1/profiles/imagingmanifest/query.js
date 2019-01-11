// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ImagingManifestSchema = require('../../schemas/imagingmanifest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ImagingManifestArgs = require('../../parameters/imagingmanifest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ImagingManifestArgs,
);

// Resolvers
const {
	getImagingManifest,
	getImagingManifestList,
	getImagingManifestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImagingManifest',
	action: 'read',
};

/**
 * @name exports.ImagingManifestQuery
 * @summary ImagingManifest query.
 */
module.exports.ImagingManifestQuery = {
	description: 'Query for a single ImagingManifest',
	resolve: scopeInvariant(scopeOptions, getImagingManifest),
	type: ImagingManifestSchema,
	args: args,
};

/**
 * @name exports.ImagingManifestListQuery
 * @summary ImagingManifest query.
 */
module.exports.ImagingManifestListQuery = {
	description: 'Query for a more than or just one ImagingManifest',
	resolve: scopeInvariant(scopeOptions, getImagingManifestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ImagingManifestInstanceQuery
 * @summary ImagingManifest query.
 */
module.exports.ImagingManifestInstanceQuery = {
	description: 'Access information about a single ImagingManifest',
	resolve: scopeInvariant(scopeOptions, getImagingManifestInstance),
	type: ImagingManifestSchema,
	args: args,
};
