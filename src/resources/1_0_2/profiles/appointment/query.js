// Schemas
const AppointmentSchema = require('../../schemas/appointment.schema');

// Arguments
const AppointmentArgs = require('../../parameters/appointment.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	appointmentResolver,
	appointmentListResolver,
	appointmentInstanceResolver
} = require('./resolver');

/**
 * @name exports.AppointmentQuery
 * @summary Appointment Query.
 */
module.exports.AppointmentQuery = {
	args: Object.assign({}, CommonArgs, AppointmentArgs),
	description: 'Query for a single Appointment',
	resolve: appointmentResolver,
	type: AppointmentSchema
};

/**
 * @name exports.AppointmentListQuery
 * @summary AppointmentList Query.
 */
module.exports.AppointmentListQuery = {
	args: Object.assign({}, CommonArgs, AppointmentArgs),
	description: 'Query for multiple Appointments',
	resolve: appointmentListResolver,
	type: new GraphQLList(AppointmentSchema)
};

/**
 * @name exports.AppointmentInstanceQuery
 * @summary AppointmentInstance Query.
 */
module.exports.AppointmentInstanceQuery = {
	description: 'Get information about a single Appointment',
	resolve: appointmentInstanceResolver,
	type: AppointmentSchema
};
