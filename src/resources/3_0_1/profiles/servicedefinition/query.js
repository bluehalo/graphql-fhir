// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ServiceDefinitionSchema = require('../../schemas/servicedefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ServiceDefinitionArgs = require('../../parameters/servicedefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	ServiceDefinitionArgs,
);

// Resolvers
const {
	getServiceDefinition,
	getServiceDefinitionList,
	getServiceDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ServiceDefinition',
	action: 'read',
};

/**
 * @name exports.ServiceDefinitionQuery
 * @summary ServiceDefinition query.
 */
module.exports.ServiceDefinitionQuery = {
	description: 'Query for a single ServiceDefinition',
	resolve: scopeInvariant(scopeOptions, getServiceDefinition),
	type: ServiceDefinitionSchema,
	args: args,
};

/**
 * @name exports.ServiceDefinitionListQuery
 * @summary ServiceDefinition query.
 */
module.exports.ServiceDefinitionListQuery = {
	description: 'Query for a more than or just one ServiceDefinition',
	resolve: scopeInvariant(scopeOptions, getServiceDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ServiceDefinitionInstanceQuery
 * @summary ServiceDefinition query.
 */
module.exports.ServiceDefinitionInstanceQuery = {
	description: 'Access information about a single ServiceDefinition',
	resolve: scopeInvariant(scopeOptions, getServiceDefinitionInstance),
	type: ServiceDefinitionSchema,
	args: args,
};
