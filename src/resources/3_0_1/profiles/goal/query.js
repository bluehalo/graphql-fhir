// Schemas
const GoalSchema = require('../../schemas/goal.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const GoalArgs = require('../../parameters/goal.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	goalResolver,
	goalListResolver,
	goalInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Goal',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.GoalQuery
 * @summary Goal Query.
 */
module.exports.GoalQuery = {
	args: Object.assign({}, CommonArgs, GoalArgs),
	description: 'Query for a single Goal',
	resolve: scopeInvariant(scopeOptions, goalResolver),
	type: GoalSchema
};

/**
 * @name exports.GoalListQuery
 * @summary GoalList Query.
 */
module.exports.GoalListQuery = {
	args: Object.assign({}, CommonArgs, GoalArgs),
	description: 'Query for multiple Goals',
	resolve: scopeInvariant(scopeOptions, goalListResolver),
	type: BundleSchema
};

/**
 * @name exports.GoalInstanceQuery
 * @summary GoalInstance Query.
 */
module.exports.GoalInstanceQuery = {
	description: 'Get information about a single Goal',
	resolve: scopeInvariant(scopeOptions, goalInstanceResolver),
	type: GoalSchema
};
