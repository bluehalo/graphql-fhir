// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceMetricSchema = require('../../schemas/devicemetric.schema');

// Inputs
const DeviceMetricInput = require('../../inputs/devicemetric.input');


const {
	devicemetricCreateResolver,
	devicemetricUpdateResolver,
	devicemetricDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DeviceMetric record.'
	},
	resource: {
		type: DeviceMetricInput,
		description: 'DeviceMetric Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DeviceMetric record for deletion.'
	}
};

/**
 * @name exports.DeviceMetricCreateMutation
 * @summary DeviceMetricCreate Mutation.
 */
module.exports.DeviceMetricCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceMetric',
	resolve: devicemetricCreateResolver,
	type: DeviceMetricSchema
};

/**
 * @name exports.DeviceMetricUpdateMutation
 * @summary DeviceMetricUpdate Mutation.
 */
module.exports.DeviceMetricUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceMetrics',
	resolve: devicemetricUpdateResolver,
	type: DeviceMetricSchema
};

/**
 * @name exports.DeviceMetricDeleteMutation
 * @summary DeviceMetricDelete Mutation.
 */
module.exports.DeviceMetricDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceMetric',
	resolve: devicemetricDeleteResolver,
	type: DeviceMetricSchema
};
