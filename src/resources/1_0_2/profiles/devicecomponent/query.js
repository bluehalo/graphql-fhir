// Schemas
const DeviceComponentSchema = require('../../schemas/devicecomponent.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceComponentArgs = require('../../parameters/devicecomponent.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	devicecomponentResolver,
	devicecomponentListResolver,
	devicecomponentInstanceResolver
} = require('./resolver');

/**
 * @name exports.DeviceComponentQuery
 * @summary DeviceComponent Query.
 */
module.exports.DeviceComponentQuery = {
	args: Object.assign({}, CommonArgs, DeviceComponentArgs),
	description: 'Query for a single DeviceComponent',
	resolve: devicecomponentResolver,
	type: DeviceComponentSchema
};

/**
 * @name exports.DeviceComponentListQuery
 * @summary DeviceComponentList Query.
 */
module.exports.DeviceComponentListQuery = {
	args: Object.assign({}, CommonArgs, DeviceComponentArgs),
	description: 'Query for multiple DeviceComponents',
	resolve: devicecomponentListResolver,
	type: BundleSchema
};

/**
 * @name exports.DeviceComponentInstanceQuery
 * @summary DeviceComponentInstance Query.
 */
module.exports.DeviceComponentInstanceQuery = {
	description: 'Get information about a single DeviceComponent',
	resolve: devicecomponentInstanceResolver,
	type: DeviceComponentSchema
};
