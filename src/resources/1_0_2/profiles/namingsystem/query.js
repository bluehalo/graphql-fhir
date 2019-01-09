// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const NamingSystemSchema = require('../../schemas/namingsystem.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const NamingSystemArgs = require('../../parameters/namingsystem.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, NamingSystemArgs);

// Resolvers
const {
	getNamingSystem,
	getNamingSystemList,
	getNamingSystemInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'NamingSystem',
	action: 'read',
};

/**
 * @name exports.NamingSystemQuery
 * @summary NamingSystem query.
 */
module.exports.NamingSystemQuery = {
	description: 'Query for a single NamingSystem',
	resolve: scopeInvariant(scopeOptions, getNamingSystem),
	type: NamingSystemSchema,
	args: args,
};

/**
 * @name exports.NamingSystemListQuery
 * @summary NamingSystem query.
 */
module.exports.NamingSystemListQuery = {
	description: 'Query for a more than or just one NamingSystem',
	resolve: scopeInvariant(scopeOptions, getNamingSystemList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.NamingSystemInstanceQuery
 * @summary NamingSystem query.
 */
module.exports.NamingSystemInstanceQuery = {
	description: 'Access information about a single NamingSystem',
	resolve: scopeInvariant(scopeOptions, getNamingSystemInstance),
	type: NamingSystemSchema,
	args: args,
};
