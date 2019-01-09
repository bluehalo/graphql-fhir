// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const GoalSchema = require('../../schemas/goal.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const GoalArgs = require('../../parameters/goal.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, GoalArgs);

// Resolvers
const { getGoal, getGoalList, getGoalInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Goal',
	action: 'read',
};

/**
 * @name exports.GoalQuery
 * @summary Goal query.
 */
module.exports.GoalQuery = {
	description: 'Query for a single Goal',
	resolve: scopeInvariant(scopeOptions, getGoal),
	type: GoalSchema,
	args: args,
};

/**
 * @name exports.GoalListQuery
 * @summary Goal query.
 */
module.exports.GoalListQuery = {
	description: 'Query for a more than or just one Goal',
	resolve: scopeInvariant(scopeOptions, getGoalList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.GoalInstanceQuery
 * @summary Goal query.
 */
module.exports.GoalInstanceQuery = {
	description: 'Access information about a single Goal',
	resolve: scopeInvariant(scopeOptions, getGoalInstance),
	type: GoalSchema,
	args: args,
};
