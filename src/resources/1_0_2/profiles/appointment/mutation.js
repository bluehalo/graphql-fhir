// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AppointmentSchema = require('../../schemas/appointment.schema');

// Inputs
const AppointmentInput = require('../../inputs/appointment.input');


const {
	appointmentCreateResolver,
	appointmentUpdateResolver,
	appointmentDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Appointment record.'
	},
	resource: {
		type: AppointmentInput,
		description: 'Appointment Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Appointment record for deletion.'
	}
};

/**
 * @name exports.AppointmentCreateMutation
 * @summary AppointmentCreate Mutation.
 */
module.exports.AppointmentCreateMutation = {
	args: WriteArgs,
	description: 'Create a Appointment',
	resolve: appointmentCreateResolver,
	type: AppointmentSchema
};

/**
 * @name exports.AppointmentUpdateMutation
 * @summary AppointmentUpdate Mutation.
 */
module.exports.AppointmentUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Appointments',
	resolve: appointmentUpdateResolver,
	type: AppointmentSchema
};

/**
 * @name exports.AppointmentDeleteMutation
 * @summary AppointmentDelete Mutation.
 */
module.exports.AppointmentDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Appointment',
	resolve: appointmentDeleteResolver,
	type: AppointmentSchema
};
