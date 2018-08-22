// Schemas
const CompartmentDefinitionSchema = require('../../schemas/compartmentdefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CompartmentDefinitionArgs = require('../../parameters/compartmentdefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	compartmentdefinitionResolver,
	compartmentdefinitionListResolver,
	compartmentdefinitionInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CompartmentDefinition',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.CompartmentDefinitionQuery
 * @summary CompartmentDefinition Query.
 */
module.exports.CompartmentDefinitionQuery = {
	args: Object.assign({}, CommonArgs, CompartmentDefinitionArgs),
	description: 'Query for a single CompartmentDefinition',
	resolve: scopeInvariant(scopeOptions, compartmentdefinitionResolver),
	type: CompartmentDefinitionSchema
};

/**
 * @name exports.CompartmentDefinitionListQuery
 * @summary CompartmentDefinitionList Query.
 */
module.exports.CompartmentDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, CompartmentDefinitionArgs),
	description: 'Query for multiple CompartmentDefinitions',
	resolve: scopeInvariant(scopeOptions, compartmentdefinitionListResolver),
	type: BundleSchema
};

/**
 * @name exports.CompartmentDefinitionInstanceQuery
 * @summary CompartmentDefinitionInstance Query.
 */
module.exports.CompartmentDefinitionInstanceQuery = {
	description: 'Get information about a single CompartmentDefinition',
	resolve: scopeInvariant(scopeOptions, compartmentdefinitionInstanceResolver),
	type: CompartmentDefinitionSchema
};
