// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ImagingObjectSelectionSchema = require('../../schemas/imagingobjectselection.schema');

// Arguments
const ImagingObjectSelectionArgs = require('../../parameters/imagingobjectselection.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	imagingobjectselectionResolver,
	imagingobjectselectionListResolver,
	imagingobjectselectionInstanceResolver
} = require('./resolver');

/**
 * @name exports.ImagingObjectSelectionQuery
 * @summary ImagingObjectSelection Query.
 */
module.exports.ImagingObjectSelectionQuery = {
	args: Object.assign({}, CommonArgs, ImagingObjectSelectionArgs),
	description: 'Query for a single ImagingObjectSelection',
	resolve: imagingobjectselectionResolver,
	type: ImagingObjectSelectionSchema
};

/**
 * @name exports.ImagingObjectSelectionListQuery
 * @summary ImagingObjectSelectionList Query.
 */
module.exports.ImagingObjectSelectionListQuery = {
	args: Object.assign({}, CommonArgs, ImagingObjectSelectionArgs),
	description: 'Query for multiple ImagingObjectSelections',
	resolve: imagingobjectselectionListResolver,
	type: BundleSchema
};

/**
 * @name exports.ImagingObjectSelectionInstanceQuery
 * @summary ImagingObjectSelectionInstance Query.
 */
module.exports.ImagingObjectSelectionInstanceQuery = {
	description: 'Get information about a single ImagingObjectSelection',
	resolve: imagingobjectselectionInstanceResolver,
	type: ImagingObjectSelectionSchema
};
