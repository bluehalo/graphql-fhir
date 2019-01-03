// Schemas
const ConditionSchema = require('../../schemas/condition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ConditionArgs = require('../../parameters/condition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	conditionResolver,
	conditionListResolver,
	conditionInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Condition',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ConditionQuery
 * @summary Condition Query.
 */
module.exports.ConditionQuery = {
	args: Object.assign({}, CommonArgs, ConditionArgs),
	description: 'Query for a single Condition',
	resolve: scopeInvariant(scopeOptions, conditionResolver),
	type: ConditionSchema,
};

/**
 * @name exports.ConditionListQuery
 * @summary ConditionList Query.
 */
module.exports.ConditionListQuery = {
	args: Object.assign({}, CommonArgs, ConditionArgs),
	description: 'Query for multiple Conditions',
	resolve: scopeInvariant(scopeOptions, conditionListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ConditionInstanceQuery
 * @summary ConditionInstance Query.
 */
module.exports.ConditionInstanceQuery = {
	description: 'Get information about a single Condition',
	resolve: scopeInvariant(scopeOptions, conditionInstanceResolver),
	type: ConditionSchema,
};
