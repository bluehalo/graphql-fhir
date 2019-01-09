// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const BinarySchema = require('../../schemas/binary.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const BinaryArgs = require('../../parameters/binary.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, BinaryArgs);

// Resolvers
const { getBinary, getBinaryList, getBinaryInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Binary',
	action: 'read',
};

/**
 * @name exports.BinaryQuery
 * @summary Binary query.
 */
module.exports.BinaryQuery = {
	description: 'Query for a single Binary',
	resolve: scopeInvariant(scopeOptions, getBinary),
	type: BinarySchema,
	args: args,
};

/**
 * @name exports.BinaryListQuery
 * @summary Binary query.
 */
module.exports.BinaryListQuery = {
	description: 'Query for a more than or just one Binary',
	resolve: scopeInvariant(scopeOptions, getBinaryList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.BinaryInstanceQuery
 * @summary Binary query.
 */
module.exports.BinaryInstanceQuery = {
	description: 'Access information about a single Binary',
	resolve: scopeInvariant(scopeOptions, getBinaryInstance),
	type: BinarySchema,
	args: args,
};
