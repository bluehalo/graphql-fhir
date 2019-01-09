// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DeviceMetricSchema = require('../../schemas/devicemetric.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DeviceMetricArgs = require('../../parameters/devicemetric.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, DeviceMetricArgs);

// Resolvers
const {
	getDeviceMetric,
	getDeviceMetricList,
	getDeviceMetricInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceMetric',
	action: 'read',
};

/**
 * @name exports.DeviceMetricQuery
 * @summary DeviceMetric query.
 */
module.exports.DeviceMetricQuery = {
	description: 'Query for a single DeviceMetric',
	resolve: scopeInvariant(scopeOptions, getDeviceMetric),
	type: DeviceMetricSchema,
	args: args,
};

/**
 * @name exports.DeviceMetricListQuery
 * @summary DeviceMetric query.
 */
module.exports.DeviceMetricListQuery = {
	description: 'Query for a more than or just one DeviceMetric',
	resolve: scopeInvariant(scopeOptions, getDeviceMetricList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DeviceMetricInstanceQuery
 * @summary DeviceMetric query.
 */
module.exports.DeviceMetricInstanceQuery = {
	description: 'Access information about a single DeviceMetric',
	resolve: scopeInvariant(scopeOptions, getDeviceMetricInstance),
	type: DeviceMetricSchema,
	args: args,
};
