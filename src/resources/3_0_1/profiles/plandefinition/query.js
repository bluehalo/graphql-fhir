// Schemas
const PlanDefinitionSchema = require('../../schemas/plandefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PlanDefinitionArgs = require('../../parameters/plandefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	plandefinitionResolver,
	plandefinitionListResolver,
	plandefinitionInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PlanDefinition',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.PlanDefinitionQuery
 * @summary PlanDefinition Query.
 */
module.exports.PlanDefinitionQuery = {
	args: Object.assign({}, CommonArgs, PlanDefinitionArgs),
	description: 'Query for a single PlanDefinition',
	resolve: scopeInvariant(scopeOptions, plandefinitionResolver),
	type: PlanDefinitionSchema
};

/**
 * @name exports.PlanDefinitionListQuery
 * @summary PlanDefinitionList Query.
 */
module.exports.PlanDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, PlanDefinitionArgs),
	description: 'Query for multiple PlanDefinitions',
	resolve: scopeInvariant(scopeOptions, plandefinitionListResolver),
	type: BundleSchema
};

/**
 * @name exports.PlanDefinitionInstanceQuery
 * @summary PlanDefinitionInstance Query.
 */
module.exports.PlanDefinitionInstanceQuery = {
	description: 'Get information about a single PlanDefinition',
	resolve: scopeInvariant(scopeOptions, plandefinitionInstanceResolver),
	type: PlanDefinitionSchema
};
