// Schemas
const GroupSchema = require('../../schemas/group.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const GroupArgs = require('../../parameters/group.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	groupResolver,
	groupListResolver,
	groupInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Group',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.GroupQuery
 * @summary Group Query.
 */
module.exports.GroupQuery = {
	args: Object.assign({}, CommonArgs, GroupArgs),
	description: 'Query for a single Group',
	resolve: scopeInvariant(scopeOptions, groupResolver),
	type: GroupSchema,
};

/**
 * @name exports.GroupListQuery
 * @summary GroupList Query.
 */
module.exports.GroupListQuery = {
	args: Object.assign({}, CommonArgs, GroupArgs),
	description: 'Query for multiple Groups',
	resolve: scopeInvariant(scopeOptions, groupListResolver),
	type: BundleSchema,
};

/**
 * @name exports.GroupInstanceQuery
 * @summary GroupInstance Query.
 */
module.exports.GroupInstanceQuery = {
	description: 'Get information about a single Group',
	resolve: scopeInvariant(scopeOptions, groupInstanceResolver),
	type: GroupSchema,
};
