// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DeviceSchema = require('../../schemas/device.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DeviceArgs = require('../../parameters/device.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, DeviceArgs);

// Resolvers
const { getDevice, getDeviceList, getDeviceInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Device',
	action: 'read',
};

/**
 * @name exports.DeviceQuery
 * @summary Device query.
 */
module.exports.DeviceQuery = {
	description: 'Query for a single Device',
	resolve: scopeInvariant(scopeOptions, getDevice),
	type: DeviceSchema,
	args: args,
};

/**
 * @name exports.DeviceListQuery
 * @summary Device query.
 */
module.exports.DeviceListQuery = {
	description: 'Query for a more than or just one Device',
	resolve: scopeInvariant(scopeOptions, getDeviceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DeviceInstanceQuery
 * @summary Device query.
 */
module.exports.DeviceInstanceQuery = {
	description: 'Access information about a single Device',
	resolve: scopeInvariant(scopeOptions, getDeviceInstance),
	type: DeviceSchema,
	args: args,
};
