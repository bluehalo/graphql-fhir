// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const MessageDefinitionSchema = require('../../schemas/messagedefinition.schema');

// Arguments
const MessageDefinitionArgs = require('../../parameters/messagedefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	messagedefinitionResolver,
	messagedefinitionListResolver,
	messagedefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.MessageDefinitionQuery
 * @summary MessageDefinition Query.
 */
module.exports.MessageDefinitionQuery = {
	args: Object.assign({}, CommonArgs, MessageDefinitionArgs),
	description: 'Query for a single MessageDefinition',
	resolve: messagedefinitionResolver,
	type: MessageDefinitionSchema
};

/**
 * @name exports.MessageDefinitionListQuery
 * @summary MessageDefinitionList Query.
 */
module.exports.MessageDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, MessageDefinitionArgs),
	description: 'Query for multiple MessageDefinitions',
	resolve: messagedefinitionListResolver,
	type: BundleSchema
};

/**
 * @name exports.MessageDefinitionInstanceQuery
 * @summary MessageDefinitionInstance Query.
 */
module.exports.MessageDefinitionInstanceQuery = {
	description: 'Get information about a single MessageDefinition',
	resolve: messagedefinitionInstanceResolver,
	type: MessageDefinitionSchema
};
