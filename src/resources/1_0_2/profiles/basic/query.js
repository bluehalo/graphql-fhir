// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const BasicSchema = require('../../schemas/basic.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const BasicArgs = require('../../parameters/basic.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, BasicArgs);

// Resolvers
const { getBasic, getBasicList, getBasicInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Basic',
	action: 'read',
};

/**
 * @name exports.BasicQuery
 * @summary Basic query.
 */
module.exports.BasicQuery = {
	description: 'Query for a single Basic',
	resolve: scopeInvariant(scopeOptions, getBasic),
	type: BasicSchema,
	args: args,
};

/**
 * @name exports.BasicListQuery
 * @summary Basic query.
 */
module.exports.BasicListQuery = {
	description: 'Query for a more than or just one Basic',
	resolve: scopeInvariant(scopeOptions, getBasicList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.BasicInstanceQuery
 * @summary Basic query.
 */
module.exports.BasicInstanceQuery = {
	description: 'Access information about a single Basic',
	resolve: scopeInvariant(scopeOptions, getBasicInstance),
	type: BasicSchema,
	args: args,
};
