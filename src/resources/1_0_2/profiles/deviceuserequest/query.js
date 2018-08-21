// Schemas
const DeviceUseRequestSchema = require('../../schemas/deviceuserequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceUseRequestArgs = require('../../parameters/deviceuserequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	deviceuserequestResolver,
	deviceuserequestListResolver,
	deviceuserequestInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DeviceUseRequest',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.DeviceUseRequestQuery
 * @summary DeviceUseRequest Query.
 */
module.exports.DeviceUseRequestQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseRequestArgs),
	description: 'Query for a single DeviceUseRequest',
	resolve: scopeInvariant(scopeOptions, deviceuserequestResolver),
	type: DeviceUseRequestSchema
};

/**
 * @name exports.DeviceUseRequestListQuery
 * @summary DeviceUseRequestList Query.
 */
module.exports.DeviceUseRequestListQuery = {
	args: Object.assign({}, CommonArgs, DeviceUseRequestArgs),
	description: 'Query for multiple DeviceUseRequests',
	resolve: scopeInvariant(scopeOptions, deviceuserequestListResolver),
	type: BundleSchema
};

/**
 * @name exports.DeviceUseRequestInstanceQuery
 * @summary DeviceUseRequestInstance Query.
 */
module.exports.DeviceUseRequestInstanceQuery = {
	description: 'Get information about a single DeviceUseRequest',
	resolve: scopeInvariant(scopeOptions, deviceuserequestInstanceResolver),
	type: DeviceUseRequestSchema
};
