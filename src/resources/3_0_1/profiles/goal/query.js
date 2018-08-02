// Schemas
const GoalSchema = require('../../schemas/goal.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const GoalArgs = require('../../parameters/goal.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	goalResolver,
	goalListResolver,
	goalInstanceResolver
} = require('./resolver');

/**
 * @name exports.GoalQuery
 * @summary Goal Query.
 */
module.exports.GoalQuery = {
	args: Object.assign({}, CommonArgs, GoalArgs),
	description: 'Query for a single Goal',
	resolve: goalResolver,
	type: GoalSchema
};

/**
 * @name exports.GoalListQuery
 * @summary GoalList Query.
 */
module.exports.GoalListQuery = {
	args: Object.assign({}, CommonArgs, GoalArgs),
	description: 'Query for multiple Goals',
	resolve: goalListResolver,
	type: BundleSchema
};

/**
 * @name exports.GoalInstanceQuery
 * @summary GoalInstance Query.
 */
module.exports.GoalInstanceQuery = {
	description: 'Get information about a single Goal',
	resolve: goalInstanceResolver,
	type: GoalSchema
};
