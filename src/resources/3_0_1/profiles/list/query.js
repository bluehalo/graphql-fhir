// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const ListSchema = require('../../schemas/list.schema');

// Arguments
const ListArgs = require('../../parameters/list.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	listResolver,
	listListResolver,
	listInstanceResolver
} = require('./resolver');

/**
 * @name exports.ListQuery
 * @summary List Query.
 */
module.exports.ListQuery = {
	args: Object.assign({}, CommonArgs, ListArgs),
	description: 'Query for a single List',
	resolve: listResolver,
	type: ListSchema
};

/**
 * @name exports.ListListQuery
 * @summary ListList Query.
 */
module.exports.ListListQuery = {
	args: Object.assign({}, CommonArgs, ListArgs),
	description: 'Query for multiple Lists',
	resolve: listListResolver,
	type: BundleSchema
};

/**
 * @name exports.ListInstanceQuery
 * @summary ListInstance Query.
 */
module.exports.ListInstanceQuery = {
	description: 'Get information about a single List',
	resolve: listInstanceResolver,
	type: ListSchema
};
