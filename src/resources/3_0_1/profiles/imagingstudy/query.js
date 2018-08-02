// Schemas
const ImagingStudySchema = require('../../schemas/imagingstudy.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ImagingStudyArgs = require('../../parameters/imagingstudy.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	imagingstudyResolver,
	imagingstudyListResolver,
	imagingstudyInstanceResolver
} = require('./resolver');

/**
 * @name exports.ImagingStudyQuery
 * @summary ImagingStudy Query.
 */
module.exports.ImagingStudyQuery = {
	args: Object.assign({}, CommonArgs, ImagingStudyArgs),
	description: 'Query for a single ImagingStudy',
	resolve: imagingstudyResolver,
	type: ImagingStudySchema
};

/**
 * @name exports.ImagingStudyListQuery
 * @summary ImagingStudyList Query.
 */
module.exports.ImagingStudyListQuery = {
	args: Object.assign({}, CommonArgs, ImagingStudyArgs),
	description: 'Query for multiple ImagingStudys',
	resolve: imagingstudyListResolver,
	type: BundleSchema
};

/**
 * @name exports.ImagingStudyInstanceQuery
 * @summary ImagingStudyInstance Query.
 */
module.exports.ImagingStudyInstanceQuery = {
	description: 'Get information about a single ImagingStudy',
	resolve: imagingstudyInstanceResolver,
	type: ImagingStudySchema
};
