// Schemas
const DeviceRequestSchema = require('../../schemas/devicerequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DeviceRequestInput = require('../../inputs/devicerequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDeviceRequest,
	updateDeviceRequest,
	removeDeviceRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DeviceRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceRequestInput),
		description: 'DeviceRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DeviceRequest record for deletion.',
	},
};

/**
 * @name exports.DeviceRequestCreateMutation
 * @summary DeviceRequestCreate mutation.
 */
module.exports.DeviceRequestCreateMutation = {
	description: 'Create a DeviceRequest record',
	resolve: scopeInvariant(scopeOptions, createDeviceRequest),
	type: DeviceRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceRequestUpdateMutation
 * @summary DeviceRequestUpdate mutation.
 */
module.exports.DeviceRequestUpdateMutation = {
	description: 'Update a DeviceRequest record',
	resolve: scopeInvariant(scopeOptions, updateDeviceRequest),
	type: DeviceRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceRequestRemoveMutation
 * @summary DeviceRequestRemove mutation.
 */
module.exports.DeviceRequestRemoveMutation = {
	description: 'Remove a DeviceRequest record',
	resolve: scopeInvariant(scopeOptions, removeDeviceRequest),
	type: DeviceRequestSchema,
	args: DeleteArgs,
};
