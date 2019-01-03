// Schemas
const OperationDefinitionSchema = require('../../schemas/operationdefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const OperationDefinitionArgs = require('../../parameters/operationdefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	operationdefinitionResolver,
	operationdefinitionListResolver,
	operationdefinitionInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'OperationDefinition',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.OperationDefinitionQuery
 * @summary OperationDefinition Query.
 */
module.exports.OperationDefinitionQuery = {
	args: Object.assign({}, CommonArgs, OperationDefinitionArgs),
	description: 'Query for a single OperationDefinition',
	resolve: scopeInvariant(scopeOptions, operationdefinitionResolver),
	type: OperationDefinitionSchema,
};

/**
 * @name exports.OperationDefinitionListQuery
 * @summary OperationDefinitionList Query.
 */
module.exports.OperationDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, OperationDefinitionArgs),
	description: 'Query for multiple OperationDefinitions',
	resolve: scopeInvariant(scopeOptions, operationdefinitionListResolver),
	type: BundleSchema,
};

/**
 * @name exports.OperationDefinitionInstanceQuery
 * @summary OperationDefinitionInstance Query.
 */
module.exports.OperationDefinitionInstanceQuery = {
	description: 'Get information about a single OperationDefinition',
	resolve: scopeInvariant(scopeOptions, operationdefinitionInstanceResolver),
	type: OperationDefinitionSchema,
};
