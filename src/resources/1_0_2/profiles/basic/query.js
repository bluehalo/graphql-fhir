// Schemas
const BasicSchema = require('../../schemas/basic.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const BasicArgs = require('../../parameters/basic.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	basicResolver,
	basicListResolver,
	basicInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Basic',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.BasicQuery
 * @summary Basic Query.
 */
module.exports.BasicQuery = {
	args: Object.assign({}, CommonArgs, BasicArgs),
	description: 'Query for a single Basic',
	resolve: scopeInvariant(scopeOptions, basicResolver),
	type: BasicSchema,
};

/**
 * @name exports.BasicListQuery
 * @summary BasicList Query.
 */
module.exports.BasicListQuery = {
	args: Object.assign({}, CommonArgs, BasicArgs),
	description: 'Query for multiple Basics',
	resolve: scopeInvariant(scopeOptions, basicListResolver),
	type: BundleSchema,
};

/**
 * @name exports.BasicInstanceQuery
 * @summary BasicInstance Query.
 */
module.exports.BasicInstanceQuery = {
	description: 'Get information about a single Basic',
	resolve: scopeInvariant(scopeOptions, basicInstanceResolver),
	type: BasicSchema,
};
