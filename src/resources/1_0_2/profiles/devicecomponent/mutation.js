// Schemas
const DeviceComponentSchema = require('../../schemas/devicecomponent.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DeviceComponentInput = require('../../inputs/devicecomponent.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDeviceComponent,
	updateDeviceComponent,
	removeDeviceComponent,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceComponent',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DeviceComponent record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceComponentInput),
		description: 'DeviceComponent Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DeviceComponent record for deletion.',
	},
};

/**
 * @name exports.DeviceComponentCreateMutation
 * @summary DeviceComponentCreate mutation.
 */
module.exports.DeviceComponentCreateMutation = {
	description: 'Create a DeviceComponent record',
	resolve: scopeInvariant(scopeOptions, createDeviceComponent),
	type: DeviceComponentSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceComponentUpdateMutation
 * @summary DeviceComponentUpdate mutation.
 */
module.exports.DeviceComponentUpdateMutation = {
	description: 'Update a DeviceComponent record',
	resolve: scopeInvariant(scopeOptions, updateDeviceComponent),
	type: DeviceComponentSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceComponentRemoveMutation
 * @summary DeviceComponentRemove mutation.
 */
module.exports.DeviceComponentRemoveMutation = {
	description: 'Remove a DeviceComponent record',
	resolve: scopeInvariant(scopeOptions, removeDeviceComponent),
	type: DeviceComponentSchema,
	args: DeleteArgs,
};
