// Schemas
const ConditionSchema = require('../../schemas/condition.schema');

// Arguments
const ConditionArgs = require('../../parameters/condition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	conditionResolver,
	conditionListResolver,
	conditionInstanceResolver
} = require('./resolver');

/**
 * @name exports.ConditionQuery
 * @summary Condition Query.
 */
module.exports.ConditionQuery = {
	args: Object.assign({}, CommonArgs, ConditionArgs),
	description: 'Query for a single Condition',
	resolve: conditionResolver,
	type: ConditionSchema
};

/**
 * @name exports.ConditionListQuery
 * @summary ConditionList Query.
 */
module.exports.ConditionListQuery = {
	args: Object.assign({}, CommonArgs, ConditionArgs),
	description: 'Query for multiple Conditions',
	resolve: conditionListResolver,
	type: new GraphQLList(ConditionSchema)
};

/**
 * @name exports.ConditionInstanceQuery
 * @summary ConditionInstance Query.
 */
module.exports.ConditionInstanceQuery = {
	description: 'Get information about a single Condition',
	resolve: conditionInstanceResolver,
	type: ConditionSchema
};
