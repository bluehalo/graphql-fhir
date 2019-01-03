// Schemas
const ListSchema = require('../../schemas/list.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ListArgs = require('../../parameters/list.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	listResolver,
	listListResolver,
	listInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'List',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.ListQuery
 * @summary List Query.
 */
module.exports.ListQuery = {
	args: Object.assign({}, CommonArgs, ListArgs),
	description: 'Query for a single List',
	resolve: scopeInvariant(scopeOptions, listResolver),
	type: ListSchema,
};

/**
 * @name exports.ListListQuery
 * @summary ListList Query.
 */
module.exports.ListListQuery = {
	args: Object.assign({}, CommonArgs, ListArgs),
	description: 'Query for multiple Lists',
	resolve: scopeInvariant(scopeOptions, listListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ListInstanceQuery
 * @summary ListInstance Query.
 */
module.exports.ListInstanceQuery = {
	description: 'Get information about a single List',
	resolve: scopeInvariant(scopeOptions, listInstanceResolver),
	type: ListSchema,
};
