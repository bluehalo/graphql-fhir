// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const LibrarySchema = require('../../schemas/library.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const LibraryArgs = require('../../parameters/library.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, LibraryArgs);

// Resolvers
const {
	getLibrary,
	getLibraryList,
	getLibraryInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Library',
	action: 'read',
};

/**
 * @name exports.LibraryQuery
 * @summary Library query.
 */
module.exports.LibraryQuery = {
	description: 'Query for a single Library',
	resolve: scopeInvariant(scopeOptions, getLibrary),
	type: LibrarySchema,
	args: args,
};

/**
 * @name exports.LibraryListQuery
 * @summary Library query.
 */
module.exports.LibraryListQuery = {
	description: 'Query for a more than or just one Library',
	resolve: scopeInvariant(scopeOptions, getLibraryList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.LibraryInstanceQuery
 * @summary Library query.
 */
module.exports.LibraryInstanceQuery = {
	description: 'Access information about a single Library',
	resolve: scopeInvariant(scopeOptions, getLibraryInstance),
	type: LibrarySchema,
	args: args,
};
