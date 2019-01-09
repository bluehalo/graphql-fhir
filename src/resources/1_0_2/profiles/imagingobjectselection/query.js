// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ImagingObjectSelectionSchema = require('../../schemas/imagingobjectselection.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ImagingObjectSelectionArgs = require('../../parameters/imagingobjectselection.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ImagingObjectSelectionArgs);

// Resolvers
const {
	getImagingObjectSelection,
	getImagingObjectSelectionList,
	getImagingObjectSelectionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImagingObjectSelection',
	action: 'read',
};

/**
 * @name exports.ImagingObjectSelectionQuery
 * @summary ImagingObjectSelection query.
 */
module.exports.ImagingObjectSelectionQuery = {
	description: 'Query for a single ImagingObjectSelection',
	resolve: scopeInvariant(scopeOptions, getImagingObjectSelection),
	type: ImagingObjectSelectionSchema,
	args: args,
};

/**
 * @name exports.ImagingObjectSelectionListQuery
 * @summary ImagingObjectSelection query.
 */
module.exports.ImagingObjectSelectionListQuery = {
	description: 'Query for a more than or just one ImagingObjectSelection',
	resolve: scopeInvariant(scopeOptions, getImagingObjectSelectionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ImagingObjectSelectionInstanceQuery
 * @summary ImagingObjectSelection query.
 */
module.exports.ImagingObjectSelectionInstanceQuery = {
	description: 'Access information about a single ImagingObjectSelection',
	resolve: scopeInvariant(scopeOptions, getImagingObjectSelectionInstance),
	type: ImagingObjectSelectionSchema,
	args: args,
};
