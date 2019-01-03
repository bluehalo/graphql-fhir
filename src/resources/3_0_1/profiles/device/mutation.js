// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DeviceSchema = require('../../schemas/device.schema');

// Inputs
const DeviceInput = require('../../inputs/device.input');

// Resolvers
const {
	deviceCreateResolver,
	deviceUpdateResolver,
	deviceDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Device',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Device record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceInput),
		description: 'Device Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Device record for deletion.',
	},
};

/**
 * @name exports.DeviceCreateMutation
 * @summary DeviceCreate Mutation.
 */
module.exports.DeviceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Device',
	resolve: scopeInvariant(scopeOptions, deviceCreateResolver),
	type: DeviceSchema,
};

/**
 * @name exports.DeviceUpdateMutation
 * @summary DeviceUpdate Mutation.
 */
module.exports.DeviceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Devices',
	resolve: scopeInvariant(scopeOptions, deviceUpdateResolver),
	type: DeviceSchema,
};

/**
 * @name exports.DeviceDeleteMutation
 * @summary DeviceDelete Mutation.
 */
module.exports.DeviceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Device',
	resolve: scopeInvariant(scopeOptions, deviceDeleteResolver),
	type: DeviceSchema,
};
