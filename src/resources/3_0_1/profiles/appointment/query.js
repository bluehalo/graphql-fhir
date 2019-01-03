// Schemas
const AppointmentSchema = require('../../schemas/appointment.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const AppointmentArgs = require('../../parameters/appointment.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	appointmentResolver,
	appointmentListResolver,
	appointmentInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Appointment',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.AppointmentQuery
 * @summary Appointment Query.
 */
module.exports.AppointmentQuery = {
	args: Object.assign({}, CommonArgs, AppointmentArgs),
	description: 'Query for a single Appointment',
	resolve: scopeInvariant(scopeOptions, appointmentResolver),
	type: AppointmentSchema,
};

/**
 * @name exports.AppointmentListQuery
 * @summary AppointmentList Query.
 */
module.exports.AppointmentListQuery = {
	args: Object.assign({}, CommonArgs, AppointmentArgs),
	description: 'Query for multiple Appointments',
	resolve: scopeInvariant(scopeOptions, appointmentListResolver),
	type: BundleSchema,
};

/**
 * @name exports.AppointmentInstanceQuery
 * @summary AppointmentInstance Query.
 */
module.exports.AppointmentInstanceQuery = {
	description: 'Get information about a single Appointment',
	resolve: scopeInvariant(scopeOptions, appointmentInstanceResolver),
	type: AppointmentSchema,
};
