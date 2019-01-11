// Schemas
const DeviceUseStatementSchema = require('../../schemas/deviceusestatement.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const DeviceUseStatementInput = require('../../inputs/deviceusestatement.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createDeviceUseStatement,
	updateDeviceUseStatement,
	removeDeviceUseStatement,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DeviceUseStatement',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a DeviceUseStatement record.',
	},
	resource: {
		type: new GraphQLNonNull(DeviceUseStatementInput),
		description: 'DeviceUseStatement Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a DeviceUseStatement record for deletion.',
	},
};

/**
 * @name exports.DeviceUseStatementCreateMutation
 * @summary DeviceUseStatementCreate mutation.
 */
module.exports.DeviceUseStatementCreateMutation = {
	description: 'Create a DeviceUseStatement record',
	resolve: scopeInvariant(scopeOptions, createDeviceUseStatement),
	type: DeviceUseStatementSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceUseStatementUpdateMutation
 * @summary DeviceUseStatementUpdate mutation.
 */
module.exports.DeviceUseStatementUpdateMutation = {
	description: 'Update a DeviceUseStatement record',
	resolve: scopeInvariant(scopeOptions, updateDeviceUseStatement),
	type: DeviceUseStatementSchema,
	args: WriteArgs,
};

/**
 * @name exports.DeviceUseStatementRemoveMutation
 * @summary DeviceUseStatementRemove mutation.
 */
module.exports.DeviceUseStatementRemoveMutation = {
	description: 'Remove a DeviceUseStatement record',
	resolve: scopeInvariant(scopeOptions, removeDeviceUseStatement),
	type: DeviceUseStatementSchema,
	args: DeleteArgs,
};
