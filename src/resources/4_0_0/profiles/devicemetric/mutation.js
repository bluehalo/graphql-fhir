// Schemas
const DeviceMetricSchema = require('../../schemas/devicemetric.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DeviceMetricInput = require('../../inputs/devicemetric.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDeviceMetric,
	updateDeviceMetric,
	removeDeviceMetric,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceMetric',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
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
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DeviceMetric record for deletion.',
	},
};

/**
 * @name exports.DeviceMetricCreateMutation
 * @summary DeviceMetricCreate mutation.
 */
module.exports.DeviceMetricCreateMutation = {
	description: 'Create a DeviceMetric record',
	resolve: scopeInvariant(scopeOptions, createDeviceMetric),
	type: DeviceMetricSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceMetricUpdateMutation
 * @summary DeviceMetricUpdate mutation.
 */
module.exports.DeviceMetricUpdateMutation = {
	description: 'Update a DeviceMetric record',
	resolve: scopeInvariant(scopeOptions, updateDeviceMetric),
	type: DeviceMetricSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceMetricRemoveMutation
 * @summary DeviceMetricRemove mutation.
 */
module.exports.DeviceMetricRemoveMutation = {
	description: 'Remove a DeviceMetric record',
	resolve: scopeInvariant(scopeOptions, removeDeviceMetric),
	type: DeviceMetricSchema,
	args: DeleteArgs,
};
