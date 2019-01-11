// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const AppointmentSchema = require('../../schemas/appointment.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const AppointmentArgs = require('../../parameters/appointment.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, AppointmentArgs);

// Resolvers
const {
	getAppointment,
	getAppointmentList,
	getAppointmentInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Appointment',
	action: 'read',
};

/**
 * @name exports.AppointmentQuery
 * @summary Appointment query.
 */
module.exports.AppointmentQuery = {
	description: 'Query for a single Appointment',
	resolve: scopeInvariant(scopeOptions, getAppointment),
	type: AppointmentSchema,
	args: args,
};

/**
 * @name exports.AppointmentListQuery
 * @summary Appointment query.
 */
module.exports.AppointmentListQuery = {
	description: 'Query for a more than or just one Appointment',
	resolve: scopeInvariant(scopeOptions, getAppointmentList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.AppointmentInstanceQuery
 * @summary Appointment query.
 */
module.exports.AppointmentInstanceQuery = {
	description: 'Access information about a single Appointment',
	resolve: scopeInvariant(scopeOptions, getAppointmentInstance),
	type: AppointmentSchema,
	args: args,
};
