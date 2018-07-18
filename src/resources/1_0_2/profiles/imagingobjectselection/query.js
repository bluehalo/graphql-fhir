// Schemas
const ImagingObjectSelectionSchema = require('../../schemas/imagingobjectselection.schema');

// Arguments
const ImagingObjectSelectionArgs = require('../../parameters/imagingobjectselection.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

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
	type: new GraphQLList(ImagingObjectSelectionSchema)
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
