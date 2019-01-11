// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const OperationDefinitionSchema = require('../../schemas/operationdefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const OperationDefinitionArgs = require('../../parameters/operationdefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	OperationDefinitionArgs,
);

// Resolvers
const {
	getOperationDefinition,
	getOperationDefinitionList,
	getOperationDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'OperationDefinition',
	action: 'read',
};

/**
 * @name exports.OperationDefinitionQuery
 * @summary OperationDefinition query.
 */
module.exports.OperationDefinitionQuery = {
	description: 'Query for a single OperationDefinition',
	resolve: scopeInvariant(scopeOptions, getOperationDefinition),
	type: OperationDefinitionSchema,
	args: args,
};

/**
 * @name exports.OperationDefinitionListQuery
 * @summary OperationDefinition query.
 */
module.exports.OperationDefinitionListQuery = {
	description: 'Query for a more than or just one OperationDefinition',
	resolve: scopeInvariant(scopeOptions, getOperationDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.OperationDefinitionInstanceQuery
 * @summary OperationDefinition query.
 */
module.exports.OperationDefinitionInstanceQuery = {
	description: 'Access information about a single OperationDefinition',
	resolve: scopeInvariant(scopeOptions, getOperationDefinitionInstance),
	type: OperationDefinitionSchema,
	args: args,
};
