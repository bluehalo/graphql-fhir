// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ConditionSchema = require('../../schemas/condition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ConditionArgs = require('../../parameters/condition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, ConditionArgs);

// Resolvers
const {
	getCondition,
	getConditionList,
	getConditionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Condition',
	action: 'read',
};

/**
 * @name exports.ConditionQuery
 * @summary Condition query.
 */
module.exports.ConditionQuery = {
	description: 'Query for a single Condition',
	resolve: scopeInvariant(scopeOptions, getCondition),
	type: ConditionSchema,
	args: args,
};

/**
 * @name exports.ConditionListQuery
 * @summary Condition query.
 */
module.exports.ConditionListQuery = {
	description: 'Query for a more than or just one Condition',
	resolve: scopeInvariant(scopeOptions, getConditionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ConditionInstanceQuery
 * @summary Condition query.
 */
module.exports.ConditionInstanceQuery = {
	description: 'Access information about a single Condition',
	resolve: scopeInvariant(scopeOptions, getConditionInstance),
	type: ConditionSchema,
	args: args,
};
