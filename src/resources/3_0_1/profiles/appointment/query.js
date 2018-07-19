// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const AppointmentSchema = require('../../schemas/appointment.schema');

// Arguments
const AppointmentArgs = require('../../parameters/appointment.parameters');
const CommonArgs = require('../../parameters/common.parameters');

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
	type: BundleSchema
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
