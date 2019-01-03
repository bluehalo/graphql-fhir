// Schemas
const MessageDefinitionSchema = require('../../schemas/messagedefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MessageDefinitionArgs = require('../../parameters/messagedefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	messagedefinitionResolver,
	messagedefinitionListResolver,
	messagedefinitionInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MessageDefinition',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.MessageDefinitionQuery
 * @summary MessageDefinition Query.
 */
module.exports.MessageDefinitionQuery = {
	args: Object.assign({}, CommonArgs, MessageDefinitionArgs),
	description: 'Query for a single MessageDefinition',
	resolve: scopeInvariant(scopeOptions, messagedefinitionResolver),
	type: MessageDefinitionSchema,
};

/**
 * @name exports.MessageDefinitionListQuery
 * @summary MessageDefinitionList Query.
 */
module.exports.MessageDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, MessageDefinitionArgs),
	description: 'Query for multiple MessageDefinitions',
	resolve: scopeInvariant(scopeOptions, messagedefinitionListResolver),
	type: BundleSchema,
};

/**
 * @name exports.MessageDefinitionInstanceQuery
 * @summary MessageDefinitionInstance Query.
 */
module.exports.MessageDefinitionInstanceQuery = {
	description: 'Get information about a single MessageDefinition',
	resolve: scopeInvariant(scopeOptions, messagedefinitionInstanceResolver),
	type: MessageDefinitionSchema,
};
