// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ListSchema = require('../../schemas/list.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ListArgs = require('../../parameters/list.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, ListArgs);

// Resolvers
const { getList, getListList, getListInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'List',
	action: 'read',
};

/**
 * @name exports.ListQuery
 * @summary List query.
 */
module.exports.ListQuery = {
	description: 'Query for a single List',
	resolve: scopeInvariant(scopeOptions, getList),
	type: ListSchema,
	args: args,
};

/**
 * @name exports.ListListQuery
 * @summary List query.
 */
module.exports.ListListQuery = {
	description: 'Query for a more than or just one List',
	resolve: scopeInvariant(scopeOptions, getListList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ListInstanceQuery
 * @summary List query.
 */
module.exports.ListInstanceQuery = {
	description: 'Access information about a single List',
	resolve: scopeInvariant(scopeOptions, getListInstance),
	type: ListSchema,
	args: args,
};
