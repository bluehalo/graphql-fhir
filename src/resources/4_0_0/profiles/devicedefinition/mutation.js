// Schemas
const DeviceDefinitionSchema = require('../../schemas/devicedefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DeviceDefinitionInput = require('../../inputs/devicedefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDeviceDefinition,
	updateDeviceDefinition,
	removeDeviceDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DeviceDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceDefinitionInput),
		description: 'DeviceDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DeviceDefinition record for deletion.',
	},
};

/**
 * @name exports.DeviceDefinitionCreateMutation
 * @summary DeviceDefinitionCreate mutation.
 */
module.exports.DeviceDefinitionCreateMutation = {
	description: 'Create a DeviceDefinition record',
	resolve: scopeInvariant(scopeOptions, createDeviceDefinition),
	type: DeviceDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceDefinitionUpdateMutation
 * @summary DeviceDefinitionUpdate mutation.
 */
module.exports.DeviceDefinitionUpdateMutation = {
	description: 'Update a DeviceDefinition record',
	resolve: scopeInvariant(scopeOptions, updateDeviceDefinition),
	type: DeviceDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceDefinitionRemoveMutation
 * @summary DeviceDefinitionRemove mutation.
 */
module.exports.DeviceDefinitionRemoveMutation = {
	description: 'Remove a DeviceDefinition record',
	resolve: scopeInvariant(scopeOptions, removeDeviceDefinition),
	type: DeviceDefinitionSchema,
	args: DeleteArgs,
};
