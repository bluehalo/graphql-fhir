// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const LibrarySchema = require('../../schemas/library.schema');

// Arguments
const LibraryArgs = require('../../parameters/library.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	libraryResolver,
	libraryListResolver,
	libraryInstanceResolver
} = require('./resolver');

/**
 * @name exports.LibraryQuery
 * @summary Library Query.
 */
module.exports.LibraryQuery = {
	args: Object.assign({}, CommonArgs, LibraryArgs),
	description: 'Query for a single Library',
	resolve: libraryResolver,
	type: LibrarySchema
};

/**
 * @name exports.LibraryListQuery
 * @summary LibraryList Query.
 */
module.exports.LibraryListQuery = {
	args: Object.assign({}, CommonArgs, LibraryArgs),
	description: 'Query for multiple Librarys',
	resolve: libraryListResolver,
	type: BundleSchema
};

/**
 * @name exports.LibraryInstanceQuery
 * @summary LibraryInstance Query.
 */
module.exports.LibraryInstanceQuery = {
	description: 'Get information about a single Library',
	resolve: libraryInstanceResolver,
	type: LibrarySchema
};
