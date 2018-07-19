// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const BasicSchema = require('../../schemas/basic.schema');

// Arguments
const BasicArgs = require('../../parameters/basic.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	basicResolver,
	basicListResolver,
	basicInstanceResolver
} = require('./resolver');

/**
 * @name exports.BasicQuery
 * @summary Basic Query.
 */
module.exports.BasicQuery = {
	args: Object.assign({}, CommonArgs, BasicArgs),
	description: 'Query for a single Basic',
	resolve: basicResolver,
	type: BasicSchema
};

/**
 * @name exports.BasicListQuery
 * @summary BasicList Query.
 */
module.exports.BasicListQuery = {
	args: Object.assign({}, CommonArgs, BasicArgs),
	description: 'Query for multiple Basics',
	resolve: basicListResolver,
	type: BundleSchema
};

/**
 * @name exports.BasicInstanceQuery
 * @summary BasicInstance Query.
 */
module.exports.BasicInstanceQuery = {
	description: 'Get information about a single Basic',
	resolve: basicInstanceResolver,
	type: BasicSchema
};
