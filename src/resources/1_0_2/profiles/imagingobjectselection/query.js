// Schemas
const ImagingObjectSelectionSchema = require('../../schemas/imagingobjectselection.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ImagingObjectSelectionArgs = require('../../parameters/imagingobjectselection.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	imagingobjectselectionResolver,
	imagingobjectselectionListResolver,
	imagingobjectselectionInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ImagingObjectSelection',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.ImagingObjectSelectionQuery
 * @summary ImagingObjectSelection Query.
 */
module.exports.ImagingObjectSelectionQuery = {
	args: Object.assign({}, CommonArgs, ImagingObjectSelectionArgs),
	description: 'Query for a single ImagingObjectSelection',
	resolve: scopeInvariant(scopeOptions, imagingobjectselectionResolver),
	type: ImagingObjectSelectionSchema,
};

/**
 * @name exports.ImagingObjectSelectionListQuery
 * @summary ImagingObjectSelectionList Query.
 */
module.exports.ImagingObjectSelectionListQuery = {
	args: Object.assign({}, CommonArgs, ImagingObjectSelectionArgs),
	description: 'Query for multiple ImagingObjectSelections',
	resolve: scopeInvariant(scopeOptions, imagingobjectselectionListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ImagingObjectSelectionInstanceQuery
 * @summary ImagingObjectSelectionInstance Query.
 */
module.exports.ImagingObjectSelectionInstanceQuery = {
	description: 'Get information about a single ImagingObjectSelection',
	resolve: scopeInvariant(scopeOptions, imagingobjectselectionInstanceResolver),
	type: ImagingObjectSelectionSchema,
};
