// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MediaSchema = require('../../schemas/media.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MediaArgs = require('../../parameters/media.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, MediaArgs);

// Resolvers
const { getMedia, getMediaList, getMediaInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Media',
	action: 'read',
};

/**
 * @name exports.MediaQuery
 * @summary Media query.
 */
module.exports.MediaQuery = {
	description: 'Query for a single Media',
	resolve: scopeInvariant(scopeOptions, getMedia),
	type: MediaSchema,
	args: args,
};

/**
 * @name exports.MediaListQuery
 * @summary Media query.
 */
module.exports.MediaListQuery = {
	description: 'Query for a more than or just one Media',
	resolve: scopeInvariant(scopeOptions, getMediaList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MediaInstanceQuery
 * @summary Media query.
 */
module.exports.MediaInstanceQuery = {
	description: 'Access information about a single Media',
	resolve: scopeInvariant(scopeOptions, getMediaInstance),
	type: MediaSchema,
	args: args,
};
