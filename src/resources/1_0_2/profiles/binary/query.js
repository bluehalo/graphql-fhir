// Schemas
const BinarySchema = require('../../schemas/binary.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const BinaryArgs = require('../../parameters/binary.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	binaryResolver,
	binaryListResolver,
	binaryInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Binary',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.BinaryQuery
 * @summary Binary Query.
 */
module.exports.BinaryQuery = {
	args: Object.assign({}, CommonArgs, BinaryArgs),
	description: 'Query for a single Binary',
	resolve: scopeInvariant(scopeOptions, binaryResolver),
	type: BinarySchema
};

/**
 * @name exports.BinaryListQuery
 * @summary BinaryList Query.
 */
module.exports.BinaryListQuery = {
	args: Object.assign({}, CommonArgs, BinaryArgs),
	description: 'Query for multiple Binarys',
	resolve: scopeInvariant(scopeOptions, binaryListResolver),
	type: BundleSchema
};

/**
 * @name exports.BinaryInstanceQuery
 * @summary BinaryInstance Query.
 */
module.exports.BinaryInstanceQuery = {
	description: 'Get information about a single Binary',
	resolve: scopeInvariant(scopeOptions, binaryInstanceResolver),
	type: BinarySchema
};
