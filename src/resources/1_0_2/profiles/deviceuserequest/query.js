// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const DeviceUseRequestSchema = require('../../schemas/deviceuserequest.schema');

// Arguments
const DeviceUseRequestArgs = require('../../parameters/deviceuserequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	deviceuserequestResolver,
	deviceuserequestListResolver,
	deviceuserequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.DeviceUseRequestQuery
 * @summary DeviceUseRequest Query.
 */
module.exports.DeviceUseRequestQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseRequestArgs),
	description: 'Query for a single DeviceUseRequest',
	resolve: deviceuserequestResolver,
	type: DeviceUseRequestSchema
};

/**
 * @name exports.DeviceUseRequestListQuery
 * @summary DeviceUseRequestList Query.
 */
module.exports.DeviceUseRequestListQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseRequestArgs),
	description: 'Query for multiple DeviceUseRequests',
	resolve: deviceuserequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.DeviceUseRequestInstanceQuery
 * @summary DeviceUseRequestInstance Query.
 */
module.exports.DeviceUseRequestInstanceQuery = {
	description: 'Get information about a single DeviceUseRequest',
	resolve: deviceuserequestInstanceResolver,
	type: DeviceUseRequestSchema
};
