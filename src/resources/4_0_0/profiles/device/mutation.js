// Schemas
const DeviceSchema = require('../../schemas/device.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DeviceInput = require('../../inputs/device.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createDevice, updateDevice, removeDevice } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Device',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Device record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceInput),
		description: 'Device Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Device record for deletion.',
	},
};

/**
 * @name exports.DeviceCreateMutation
 * @summary DeviceCreate mutation.
 */
module.exports.DeviceCreateMutation = {
	description: 'Create a Device record',
	resolve: scopeInvariant(scopeOptions, createDevice),
	type: DeviceSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceUpdateMutation
 * @summary DeviceUpdate mutation.
 */
module.exports.DeviceUpdateMutation = {
	description: 'Update a Device record',
	resolve: scopeInvariant(scopeOptions, updateDevice),
	type: DeviceSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceRemoveMutation
 * @summary DeviceRemove mutation.
 */
module.exports.DeviceRemoveMutation = {
	description: 'Remove a Device record',
	resolve: scopeInvariant(scopeOptions, removeDevice),
	type: DeviceSchema,
	args: DeleteArgs,
};
