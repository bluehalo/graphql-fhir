// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MessageDefinitionSchema = require('../../schemas/messagedefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MessageDefinitionArgs = require('../../parameters/messagedefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MessageDefinitionArgs,
);

// Resolvers
const {
	getMessageDefinition,
	getMessageDefinitionList,
	getMessageDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MessageDefinition',
	action: 'read',
};

/**
 * @name exports.MessageDefinitionQuery
 * @summary MessageDefinition query.
 */
module.exports.MessageDefinitionQuery = {
	description: 'Query for a single MessageDefinition',
	resolve: scopeInvariant(scopeOptions, getMessageDefinition),
	type: MessageDefinitionSchema,
	args: args,
};

/**
 * @name exports.MessageDefinitionListQuery
 * @summary MessageDefinition query.
 */
module.exports.MessageDefinitionListQuery = {
	description: 'Query for a more than or just one MessageDefinition',
	resolve: scopeInvariant(scopeOptions, getMessageDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MessageDefinitionInstanceQuery
 * @summary MessageDefinition query.
 */
module.exports.MessageDefinitionInstanceQuery = {
	description: 'Access information about a single MessageDefinition',
	resolve: scopeInvariant(scopeOptions, getMessageDefinitionInstance),
	type: MessageDefinitionSchema,
	args: args,
};
