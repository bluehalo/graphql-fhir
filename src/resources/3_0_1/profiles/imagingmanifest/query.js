// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ImagingManifestSchema = require('../../schemas/imagingmanifest.schema');

// Arguments
const ImagingManifestArgs = require('../../parameters/imagingmanifest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	imagingmanifestResolver,
	imagingmanifestListResolver,
	imagingmanifestInstanceResolver
} = require('./resolver');

/**
 * @name exports.ImagingManifestQuery
 * @summary ImagingManifest Query.
 */
module.exports.ImagingManifestQuery = {
	args: Object.assign({}, CommonArgs, ImagingManifestArgs),
	description: 'Query for a single ImagingManifest',
	resolve: imagingmanifestResolver,
	type: ImagingManifestSchema
};

/**
 * @name exports.ImagingManifestListQuery
 * @summary ImagingManifestList Query.
 */
module.exports.ImagingManifestListQuery = {
	args: Object.assign({}, CommonArgs, ImagingManifestArgs),
	description: 'Query for multiple ImagingManifests',
	resolve: imagingmanifestListResolver,
	type: BundleSchema
};

/**
 * @name exports.ImagingManifestInstanceQuery
 * @summary ImagingManifestInstance Query.
 */
module.exports.ImagingManifestInstanceQuery = {
	description: 'Get information about a single ImagingManifest',
	resolve: imagingmanifestInstanceResolver,
	type: ImagingManifestSchema
};
