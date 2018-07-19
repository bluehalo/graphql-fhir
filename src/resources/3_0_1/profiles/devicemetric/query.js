// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const DeviceMetricSchema = require('../../schemas/devicemetric.schema');

// Arguments
const DeviceMetricArgs = require('../../parameters/devicemetric.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	devicemetricResolver,
	devicemetricListResolver,
	devicemetricInstanceResolver
} = require('./resolver');

/**
 * @name exports.DeviceMetricQuery
 * @summary DeviceMetric Query.
 */
module.exports.DeviceMetricQuery = {
	args: Object.assign({}, CommonArgs, DeviceMetricArgs),
	description: 'Query for a single DeviceMetric',
	resolve: devicemetricResolver,
	type: DeviceMetricSchema
};

/**
 * @name exports.DeviceMetricListQuery
 * @summary DeviceMetricList Query.
 */
module.exports.DeviceMetricListQuery = {
	args: Object.assign({}, CommonArgs, DeviceMetricArgs),
	description: 'Query for multiple DeviceMetrics',
	resolve: devicemetricListResolver,
	type: BundleSchema
};

/**
 * @name exports.DeviceMetricInstanceQuery
 * @summary DeviceMetricInstance Query.
 */
module.exports.DeviceMetricInstanceQuery = {
	description: 'Get information about a single DeviceMetric',
	resolve: devicemetricInstanceResolver,
	type: DeviceMetricSchema
};
