// Schemas
const PlanDefinitionSchema = require('../../schemas/plandefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PlanDefinitionArgs = require('../../parameters/plandefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	plandefinitionResolver,
	plandefinitionListResolver,
	plandefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.PlanDefinitionQuery
 * @summary PlanDefinition Query.
 */
module.exports.PlanDefinitionQuery = {
	args: Object.assign({}, CommonArgs, PlanDefinitionArgs),
	description: 'Query for a single PlanDefinition',
	resolve: plandefinitionResolver,
	type: PlanDefinitionSchema
};

/**
 * @name exports.PlanDefinitionListQuery
 * @summary PlanDefinitionList Query.
 */
module.exports.PlanDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, PlanDefinitionArgs),
	description: 'Query for multiple PlanDefinitions',
	resolve: plandefinitionListResolver,
	type: BundleSchema
};

/**
 * @name exports.PlanDefinitionInstanceQuery
 * @summary PlanDefinitionInstance Query.
 */
module.exports.PlanDefinitionInstanceQuery = {
	description: 'Get information about a single PlanDefinition',
	resolve: plandefinitionInstanceResolver,
	type: PlanDefinitionSchema
};
