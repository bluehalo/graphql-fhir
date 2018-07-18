// Schemas
const MediaSchema = require('../../schemas/media.schema');

// Arguments
const MediaArgs = require('../../parameters/media.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	mediaResolver,
	mediaListResolver,
	mediaInstanceResolver
} = require('./resolver');

/**
 * @name exports.MediaQuery
 * @summary Media Query.
 */
module.exports.MediaQuery = {
	args: Object.assign({}, CommonArgs, MediaArgs),
	description: 'Query for a single Media',
	resolve: mediaResolver,
	type: MediaSchema
};

/**
 * @name exports.MediaListQuery
 * @summary MediaList Query.
 */
module.exports.MediaListQuery = {
	args: Object.assign({}, CommonArgs, MediaArgs),
	description: 'Query for multiple Medias',
	resolve: mediaListResolver,
	type: new GraphQLList(MediaSchema)
};

/**
 * @name exports.MediaInstanceQuery
 * @summary MediaInstance Query.
 */
module.exports.MediaInstanceQuery = {
	description: 'Get information about a single Media',
	resolve: mediaInstanceResolver,
	type: MediaSchema
};
