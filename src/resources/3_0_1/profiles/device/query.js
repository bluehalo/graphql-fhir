// Schemas
const DeviceSchema = require('../../schemas/device.schema');

// Arguments
const DeviceArgs = require('../../parameters/device.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	deviceResolver,
	deviceListResolver,
	deviceInstanceResolver
} = require('./resolver');

/**
 * @name exports.DeviceQuery
 * @summary Device Query.
 */
module.exports.DeviceQuery = {
	args: Object.assign({}, CommonArgs, DeviceArgs),
	description: 'Query for a single Device',
	resolve: deviceResolver,
	type: DeviceSchema
};

/**
 * @name exports.DeviceListQuery
 * @summary DeviceList Query.
 */
module.exports.DeviceListQuery = {
	args: Object.assign({}, CommonArgs, DeviceArgs),
	description: 'Query for multiple Devices',
	resolve: deviceListResolver,
	type: new GraphQLList(DeviceSchema)
};

/**
 * @name exports.DeviceInstanceQuery
 * @summary DeviceInstance Query.
 */
module.exports.DeviceInstanceQuery = {
	description: 'Get information about a single Device',
	resolve: deviceInstanceResolver,
	type: DeviceSchema
};
