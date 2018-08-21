// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AppointmentSchema = require('../../schemas/appointment.schema');

// Inputs
const AppointmentInput = require('../../inputs/appointment.input');

// Resolvers
const {
	appointmentCreateResolver,
	appointmentUpdateResolver,
	appointmentDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Appointment',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Appointment record.'
	},
	resource: {
		type: new GraphQLNonNull(AppointmentInput),
		description: 'Appointment Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, appointmentCreateResolver),
	type: AppointmentSchema
};

/**
 * @name exports.AppointmentUpdateMutation
 * @summary AppointmentUpdate Mutation.
 */
module.exports.AppointmentUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Appointments',
	resolve: scopeInvariant(scopeOptions, appointmentUpdateResolver),
	type: AppointmentSchema
};

/**
 * @name exports.AppointmentDeleteMutation
 * @summary AppointmentDelete Mutation.
 */
module.exports.AppointmentDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Appointment',
	resolve: scopeInvariant(scopeOptions, appointmentDeleteResolver),
	type: AppointmentSchema
};
