// Schemas
const AppointmentSchema = require('../../schemas/appointment.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const AppointmentInput = require('../../inputs/appointment.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createAppointment,
	updateAppointment,
	removeAppointment,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Appointment',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a Appointment record.',
	},
	resource: {
		type: new GraphQLNonNull(AppointmentInput),
		description: 'Appointment Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Appointment record for deletion.',
	},
};

/**
 * @name exports.AppointmentCreateMutation
 * @summary AppointmentCreate mutation.
 */
module.exports.AppointmentCreateMutation = {
	description: 'Create a Appointment record',
	resolve: scopeInvariant(scopeOptions, createAppointment),
	type: AppointmentSchema,
	args: WriteArgs,
};

/**
 * @name exports.AppointmentUpdateMutation
 * @summary AppointmentUpdate mutation.
 */
module.exports.AppointmentUpdateMutation = {
	description: 'Update a Appointment record',
	resolve: scopeInvariant(scopeOptions, updateAppointment),
	type: AppointmentSchema,
	args: WriteArgs,
};

/**
 * @name exports.AppointmentRemoveMutation
 * @summary AppointmentRemove mutation.
 */
module.exports.AppointmentRemoveMutation = {
	description: 'Remove a Appointment record',
	resolve: scopeInvariant(scopeOptions, removeAppointment),
	type: AppointmentSchema,
	args: DeleteArgs,
};
