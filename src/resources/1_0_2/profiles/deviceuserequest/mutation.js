// Schemas
const DeviceUseRequestSchema = require('../../schemas/deviceuserequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DeviceUseRequestInput = require('../../inputs/deviceuserequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDeviceUseRequest,
	updateDeviceUseRequest,
	removeDeviceUseRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceUseRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DeviceUseRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceUseRequestInput),
		description: 'DeviceUseRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DeviceUseRequest record for deletion.',
	},
};

/**
 * @name exports.DeviceUseRequestCreateMutation
 * @summary DeviceUseRequestCreate mutation.
 */
module.exports.DeviceUseRequestCreateMutation = {
	description: 'Create a DeviceUseRequest record',
	resolve: scopeInvariant(scopeOptions, createDeviceUseRequest),
	type: DeviceUseRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceUseRequestUpdateMutation
 * @summary DeviceUseRequestUpdate mutation.
 */
module.exports.DeviceUseRequestUpdateMutation = {
	description: 'Update a DeviceUseRequest record',
	resolve: scopeInvariant(scopeOptions, updateDeviceUseRequest),
	type: DeviceUseRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceUseRequestRemoveMutation
 * @summary DeviceUseRequestRemove mutation.
 */
module.exports.DeviceUseRequestRemoveMutation = {
	description: 'Remove a DeviceUseRequest record',
	resolve: scopeInvariant(scopeOptions, removeDeviceUseRequest),
	type: DeviceUseRequestSchema,
	args: DeleteArgs,
};
