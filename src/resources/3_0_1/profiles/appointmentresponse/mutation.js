// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AppointmentResponseSchema = require('../../schemas/appointmentresponse.schema');

// Inputs
const AppointmentResponseInput = require('../../inputs/appointmentresponse.input');


const {
	appointmentresponseCreateResolver,
	appointmentresponseUpdateResolver,
	appointmentresponseDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a AppointmentResponse record.'
	},
	resource: {
		type: AppointmentResponseInput,
		description: 'AppointmentResponse Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a AppointmentResponse record for deletion.'
	}
};

/**
 * @name exports.AppointmentResponseCreateMutation
 * @summary AppointmentResponseCreate Mutation.
 */
module.exports.AppointmentResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a AppointmentResponse',
	resolve: appointmentresponseCreateResolver,
	type: AppointmentResponseSchema
};

/**
 * @name exports.AppointmentResponseUpdateMutation
 * @summary AppointmentResponseUpdate Mutation.
 */
module.exports.AppointmentResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple AppointmentResponses',
	resolve: appointmentresponseUpdateResolver,
	type: AppointmentResponseSchema
};

/**
 * @name exports.AppointmentResponseDeleteMutation
 * @summary AppointmentResponseDelete Mutation.
 */
module.exports.AppointmentResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single AppointmentResponse',
	resolve: appointmentresponseDeleteResolver,
	type: AppointmentResponseSchema
};
