// Schemas
const MediaSchema = require('../../schemas/media.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MediaArgs = require('../../parameters/media.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	mediaResolver,
	mediaListResolver,
	mediaInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Media',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.MediaQuery
 * @summary Media Query.
 */
module.exports.MediaQuery = {
	args: Object.assign({}, CommonArgs, MediaArgs),
	description: 'Query for a single Media',
	resolve: scopeInvariant(scopeOptions, mediaResolver),
	type: MediaSchema,
};

/**
 * @name exports.MediaListQuery
 * @summary MediaList Query.
 */
module.exports.MediaListQuery = {
	args: Object.assign({}, CommonArgs, MediaArgs),
	description: 'Query for multiple Medias',
	resolve: scopeInvariant(scopeOptions, mediaListResolver),
	type: BundleSchema,
};

/**
 * @name exports.MediaInstanceQuery
 * @summary MediaInstance Query.
 */
module.exports.MediaInstanceQuery = {
	description: 'Get information about a single Media',
	resolve: scopeInvariant(scopeOptions, mediaInstanceResolver),
	type: MediaSchema,
};
