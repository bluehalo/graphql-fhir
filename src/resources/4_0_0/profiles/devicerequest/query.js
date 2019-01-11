// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DeviceRequestSchema = require('../../schemas/devicerequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DeviceRequestArgs = require('../../parameters/devicerequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	DeviceRequestArgs,
);

// Resolvers
const {
	getDeviceRequest,
	getDeviceRequestList,
	getDeviceRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceRequest',
	action: 'read',
};

/**
 * @name exports.DeviceRequestQuery
 * @summary DeviceRequest query.
 */
module.exports.DeviceRequestQuery = {
	description: 'Query for a single DeviceRequest',
	resolve: scopeInvariant(scopeOptions, getDeviceRequest),
	type: DeviceRequestSchema,
	args: args,
};

/**
 * @name exports.DeviceRequestListQuery
 * @summary DeviceRequest query.
 */
module.exports.DeviceRequestListQuery = {
	description: 'Query for a more than or just one DeviceRequest',
	resolve: scopeInvariant(scopeOptions, getDeviceRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DeviceRequestInstanceQuery
 * @summary DeviceRequest query.
 */
module.exports.DeviceRequestInstanceQuery = {
	description: 'Access information about a single DeviceRequest',
	resolve: scopeInvariant(scopeOptions, getDeviceRequestInstance),
	type: DeviceRequestSchema,
	args: args,
};
