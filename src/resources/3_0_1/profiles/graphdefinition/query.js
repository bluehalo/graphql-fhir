// Schemas
const GraphDefinitionSchema = require('../../schemas/graphdefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const GraphDefinitionArgs = require('../../parameters/graphdefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	graphdefinitionResolver,
	graphdefinitionListResolver,
	graphdefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.GraphDefinitionQuery
 * @summary GraphDefinition Query.
 */
module.exports.GraphDefinitionQuery = {
	args: Object.assign({}, CommonArgs, GraphDefinitionArgs),
	description: 'Query for a single GraphDefinition',
	resolve: graphdefinitionResolver,
	type: GraphDefinitionSchema
};

/**
 * @name exports.GraphDefinitionListQuery
 * @summary GraphDefinitionList Query.
 */
module.exports.GraphDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, GraphDefinitionArgs),
	description: 'Query for multiple GraphDefinitions',
	resolve: graphdefinitionListResolver,
	type: BundleSchema
};

/**
 * @name exports.GraphDefinitionInstanceQuery
 * @summary GraphDefinitionInstance Query.
 */
module.exports.GraphDefinitionInstanceQuery = {
	description: 'Get information about a single GraphDefinition',
	resolve: graphdefinitionInstanceResolver,
	type: GraphDefinitionSchema
};
