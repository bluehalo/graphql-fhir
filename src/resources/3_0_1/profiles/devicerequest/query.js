// Schemas
const DeviceRequestSchema = require('../../schemas/devicerequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceRequestArgs = require('../../parameters/devicerequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	devicerequestResolver,
	devicerequestListResolver,
	devicerequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.DeviceRequestQuery
 * @summary DeviceRequest Query.
 */
module.exports.DeviceRequestQuery = {
	args: Object.assign({}, CommonArgs, DeviceRequestArgs),
	description: 'Query for a single DeviceRequest',
	resolve: devicerequestResolver,
	type: DeviceRequestSchema
};

/**
 * @name exports.DeviceRequestListQuery
 * @summary DeviceRequestList Query.
 */
module.exports.DeviceRequestListQuery = {
	args: Object.assign({}, CommonArgs, DeviceRequestArgs),
	description: 'Query for multiple DeviceRequests',
	resolve: devicerequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.DeviceRequestInstanceQuery
 * @summary DeviceRequestInstance Query.
 */
module.exports.DeviceRequestInstanceQuery = {
	description: 'Get information about a single DeviceRequest',
	resolve: devicerequestInstanceResolver,
	type: DeviceRequestSchema
};
