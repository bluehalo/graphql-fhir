// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const CompartmentDefinitionSchema = require('../../schemas/compartmentdefinition.schema');

// Arguments
const CompartmentDefinitionArgs = require('../../parameters/compartmentdefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	compartmentdefinitionResolver,
	compartmentdefinitionListResolver,
	compartmentdefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.CompartmentDefinitionQuery
 * @summary CompartmentDefinition Query.
 */
module.exports.CompartmentDefinitionQuery = {
	args: Object.assign({}, CommonArgs, CompartmentDefinitionArgs),
	description: 'Query for a single CompartmentDefinition',
	resolve: compartmentdefinitionResolver,
	type: CompartmentDefinitionSchema
};

/**
 * @name exports.CompartmentDefinitionListQuery
 * @summary CompartmentDefinitionList Query.
 */
module.exports.CompartmentDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, CompartmentDefinitionArgs),
	description: 'Query for multiple CompartmentDefinitions',
	resolve: compartmentdefinitionListResolver,
	type: BundleSchema
};

/**
 * @name exports.CompartmentDefinitionInstanceQuery
 * @summary CompartmentDefinitionInstance Query.
 */
module.exports.CompartmentDefinitionInstanceQuery = {
	description: 'Get information about a single CompartmentDefinition',
	resolve: compartmentdefinitionInstanceResolver,
	type: CompartmentDefinitionSchema
};
