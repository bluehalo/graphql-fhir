// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ImagingStudySchema = require('../../schemas/imagingstudy.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ImagingStudyArgs = require('../../parameters/imagingstudy.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ImagingStudyArgs);

// Resolvers
const {
	getImagingStudy,
	getImagingStudyList,
	getImagingStudyInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImagingStudy',
	action: 'read',
};

/**
 * @name exports.ImagingStudyQuery
 * @summary ImagingStudy query.
 */
module.exports.ImagingStudyQuery = {
	description: 'Query for a single ImagingStudy',
	resolve: scopeInvariant(scopeOptions, getImagingStudy),
	type: ImagingStudySchema,
	args: args,
};

/**
 * @name exports.ImagingStudyListQuery
 * @summary ImagingStudy query.
 */
module.exports.ImagingStudyListQuery = {
	description: 'Query for a more than or just one ImagingStudy',
	resolve: scopeInvariant(scopeOptions, getImagingStudyList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ImagingStudyInstanceQuery
 * @summary ImagingStudy query.
 */
module.exports.ImagingStudyInstanceQuery = {
	description: 'Access information about a single ImagingStudy',
	resolve: scopeInvariant(scopeOptions, getImagingStudyInstance),
	type: ImagingStudySchema,
	args: args,
};
