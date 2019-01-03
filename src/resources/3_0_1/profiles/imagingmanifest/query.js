// Schemas
const ImagingManifestSchema = require('../../schemas/imagingmanifest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ImagingManifestArgs = require('../../parameters/imagingmanifest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	imagingmanifestResolver,
	imagingmanifestListResolver,
	imagingmanifestInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ImagingManifest',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ImagingManifestQuery
 * @summary ImagingManifest Query.
 */
module.exports.ImagingManifestQuery = {
	args: Object.assign({}, CommonArgs, ImagingManifestArgs),
	description: 'Query for a single ImagingManifest',
	resolve: scopeInvariant(scopeOptions, imagingmanifestResolver),
	type: ImagingManifestSchema,
};

/**
 * @name exports.ImagingManifestListQuery
 * @summary ImagingManifestList Query.
 */
module.exports.ImagingManifestListQuery = {
	args: Object.assign({}, CommonArgs, ImagingManifestArgs),
	description: 'Query for multiple ImagingManifests',
	resolve: scopeInvariant(scopeOptions, imagingmanifestListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ImagingManifestInstanceQuery
 * @summary ImagingManifestInstance Query.
 */
module.exports.ImagingManifestInstanceQuery = {
	description: 'Get information about a single ImagingManifest',
	resolve: scopeInvariant(scopeOptions, imagingmanifestInstanceResolver),
	type: ImagingManifestSchema,
};
