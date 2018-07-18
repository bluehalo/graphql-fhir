// Schemas
const OperationDefinitionSchema = require('../../schemas/operationdefinition.schema');

// Arguments
const OperationDefinitionArgs = require('../../parameters/operationdefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	operationdefinitionResolver,
	operationdefinitionListResolver,
	operationdefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.OperationDefinitionQuery
 * @summary OperationDefinition Query.
 */
module.exports.OperationDefinitionQuery = {
	args: Object.assign({}, CommonArgs, OperationDefinitionArgs),
	description: 'Query for a single OperationDefinition',
	resolve: operationdefinitionResolver,
	type: OperationDefinitionSchema
};

/**
 * @name exports.OperationDefinitionListQuery
 * @summary OperationDefinitionList Query.
 */
module.exports.OperationDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, OperationDefinitionArgs),
	description: 'Query for multiple OperationDefinitions',
	resolve: operationdefinitionListResolver,
	type: new GraphQLList(OperationDefinitionSchema)
};

/**
 * @name exports.OperationDefinitionInstanceQuery
 * @summary OperationDefinitionInstance Query.
 */
module.exports.OperationDefinitionInstanceQuery = {
	description: 'Get information about a single OperationDefinition',
	resolve: operationdefinitionInstanceResolver,
	type: OperationDefinitionSchema
};
