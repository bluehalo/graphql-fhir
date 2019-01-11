// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DeviceUseRequestSchema = require('../../schemas/deviceuserequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DeviceUseRequestArgs = require('../../parameters/deviceuserequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, DeviceUseRequestArgs);

// Resolvers
const {
	getDeviceUseRequest,
	getDeviceUseRequestList,
	getDeviceUseRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceUseRequest',
	action: 'read',
};

/**
 * @name exports.DeviceUseRequestQuery
 * @summary DeviceUseRequest query.
 */
module.exports.DeviceUseRequestQuery = {
	description: 'Query for a single DeviceUseRequest',
	resolve: scopeInvariant(scopeOptions, getDeviceUseRequest),
	type: DeviceUseRequestSchema,
	args: args,
};

/**
 * @name exports.DeviceUseRequestListQuery
 * @summary DeviceUseRequest query.
 */
module.exports.DeviceUseRequestListQuery = {
	description: 'Query for a more than or just one DeviceUseRequest',
	resolve: scopeInvariant(scopeOptions, getDeviceUseRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DeviceUseRequestInstanceQuery
 * @summary DeviceUseRequest query.
 */
module.exports.DeviceUseRequestInstanceQuery = {
	description: 'Access information about a single DeviceUseRequest',
	resolve: scopeInvariant(scopeOptions, getDeviceUseRequestInstance),
	type: DeviceUseRequestSchema,
	args: args,
};
