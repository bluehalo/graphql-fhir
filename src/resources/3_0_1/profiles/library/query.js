// Schemas
const LibrarySchema = require('../../schemas/library.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const LibraryArgs = require('../../parameters/library.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	libraryResolver,
	libraryListResolver,
	libraryInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Library',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.LibraryQuery
 * @summary Library Query.
 */
module.exports.LibraryQuery = {
	args: Object.assign({}, CommonArgs, LibraryArgs),
	description: 'Query for a single Library',
	resolve: scopeInvariant(scopeOptions, libraryResolver),
	type: LibrarySchema,
};

/**
 * @name exports.LibraryListQuery
 * @summary LibraryList Query.
 */
module.exports.LibraryListQuery = {
	args: Object.assign({}, CommonArgs, LibraryArgs),
	description: 'Query for multiple Librarys',
	resolve: scopeInvariant(scopeOptions, libraryListResolver),
	type: BundleSchema,
};

/**
 * @name exports.LibraryInstanceQuery
 * @summary LibraryInstance Query.
 */
module.exports.LibraryInstanceQuery = {
	description: 'Get information about a single Library',
	resolve: scopeInvariant(scopeOptions, libraryInstanceResolver),
	type: LibrarySchema,
};
