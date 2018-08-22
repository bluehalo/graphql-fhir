// Schemas
const DeviceSchema = require('../../schemas/device.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceArgs = require('../../parameters/device.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	deviceResolver,
	deviceListResolver,
	deviceInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Device',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.DeviceQuery
 * @summary Device Query.
 */
module.exports.DeviceQuery = {
	args: Object.assign({}, CommonArgs, DeviceArgs),
	description: 'Query for a single Device',
	resolve: scopeInvariant(scopeOptions, deviceResolver),
	type: DeviceSchema
};

/**
 * @name exports.DeviceListQuery
 * @summary DeviceList Query.
 */
module.exports.DeviceListQuery = {
	args: Object.assign({}, CommonArgs, DeviceArgs),
	description: 'Query for multiple Devices',
	resolve: scopeInvariant(scopeOptions, deviceListResolver),
	type: BundleSchema
};

/**
 * @name exports.DeviceInstanceQuery
 * @summary DeviceInstance Query.
 */
module.exports.DeviceInstanceQuery = {
	description: 'Get information about a single Device',
	resolve: scopeInvariant(scopeOptions, deviceInstanceResolver),
	type: DeviceSchema
};
