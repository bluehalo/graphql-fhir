// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DeviceDefinitionSchema = require('../../schemas/devicedefinition.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DeviceDefinitionArgs = require('../../parameters/devicedefinition.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	DeviceDefinitionArgs,
);

// Resolvers
const {
	getDeviceDefinition,
	getDeviceDefinitionList,
	getDeviceDefinitionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceDefinition',
	action: 'read',
};

/**
 * @name exports.DeviceDefinitionQuery
 * @summary DeviceDefinition query.
 */
module.exports.DeviceDefinitionQuery = {
	description: 'Query for a single DeviceDefinition',
	resolve: scopeInvariant(scopeOptions, getDeviceDefinition),
	type: DeviceDefinitionSchema,
	args: args,
};

/**
 * @name exports.DeviceDefinitionListQuery
 * @summary DeviceDefinition query.
 */
module.exports.DeviceDefinitionListQuery = {
	description: 'Query for a more than or just one DeviceDefinition',
	resolve: scopeInvariant(scopeOptions, getDeviceDefinitionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DeviceDefinitionInstanceQuery
 * @summary DeviceDefinition query.
 */
module.exports.DeviceDefinitionInstanceQuery = {
	description: 'Access information about a single DeviceDefinition',
	resolve: scopeInvariant(scopeOptions, getDeviceDefinitionInstance),
	type: DeviceDefinitionSchema,
	args: args,
};
