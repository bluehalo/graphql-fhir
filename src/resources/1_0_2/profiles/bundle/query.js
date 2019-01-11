// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const BundleArgs = require('../../parameters/bundle.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, BundleArgs);

// Resolvers
const { getBundle, getBundleList, getBundleInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Bundle',
	action: 'read',
};

/**
 * @name exports.BundleQuery
 * @summary Bundle query.
 */
module.exports.BundleQuery = {
	description: 'Query for a single Bundle',
	resolve: scopeInvariant(scopeOptions, getBundle),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.BundleListQuery
 * @summary Bundle query.
 */
module.exports.BundleListQuery = {
	description: 'Query for a more than or just one Bundle',
	resolve: scopeInvariant(scopeOptions, getBundleList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.BundleInstanceQuery
 * @summary Bundle query.
 */
module.exports.BundleInstanceQuery = {
	description: 'Access information about a single Bundle',
	resolve: scopeInvariant(scopeOptions, getBundleInstance),
	type: BundleSchema,
	args: args,
};
