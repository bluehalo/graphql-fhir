// Schemas
const DeviceMetricSchema = require('../../schemas/devicemetric.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DeviceMetricArgs = require('../../parameters/devicemetric.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	devicemetricResolver,
	devicemetricListResolver,
	devicemetricInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DeviceMetric',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.DeviceMetricQuery
 * @summary DeviceMetric Query.
 */
module.exports.DeviceMetricQuery = {
	args: Object.assign({}, CommonArgs, DeviceMetricArgs),
	description: 'Query for a single DeviceMetric',
	resolve: scopeInvariant(scopeOptions, devicemetricResolver),
	type: DeviceMetricSchema
};

/**
 * @name exports.DeviceMetricListQuery
 * @summary DeviceMetricList Query.
 */
module.exports.DeviceMetricListQuery = {
	args: Object.assign({}, CommonArgs, DeviceMetricArgs),
	description: 'Query for multiple DeviceMetrics',
	resolve: scopeInvariant(scopeOptions, devicemetricListResolver),
	type: BundleSchema
};

/**
 * @name exports.DeviceMetricInstanceQuery
 * @summary DeviceMetricInstance Query.
 */
module.exports.DeviceMetricInstanceQuery = {
	description: 'Get information about a single DeviceMetric',
	resolve: scopeInvariant(scopeOptions, devicemetricInstanceResolver),
	type: DeviceMetricSchema
};
