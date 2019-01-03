// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceMetricSchema = require('../../schemas/devicemetric.schema');

// Inputs
const DeviceMetricInput = require('../../inputs/devicemetric.input');

// Resolvers
const {
	devicemetricCreateResolver,
	devicemetricUpdateResolver,
	devicemetricDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DeviceMetric',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a DeviceMetric record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceMetricInput),
		description: 'DeviceMetric Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a DeviceMetric record for deletion.',
	},
};

/**
 * @name exports.DeviceMetricCreateMutation
 * @summary DeviceMetricCreate Mutation.
 */
module.exports.DeviceMetricCreateMutation = {
	args: WriteArgs,
	description: 'Create a DeviceMetric',
	resolve: scopeInvariant(scopeOptions, devicemetricCreateResolver),
	type: DeviceMetricSchema,
};

/**
 * @name exports.DeviceMetricUpdateMutation
 * @summary DeviceMetricUpdate Mutation.
 */
module.exports.DeviceMetricUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DeviceMetrics',
	resolve: scopeInvariant(scopeOptions, devicemetricUpdateResolver),
	type: DeviceMetricSchema,
};

/**
 * @name exports.DeviceMetricDeleteMutation
 * @summary DeviceMetricDelete Mutation.
 */
module.exports.DeviceMetricDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DeviceMetric',
	resolve: scopeInvariant(scopeOptions, devicemetricDeleteResolver),
	type: DeviceMetricSchema,
};
