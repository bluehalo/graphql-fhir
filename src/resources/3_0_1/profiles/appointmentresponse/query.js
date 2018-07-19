// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const AppointmentResponseSchema = require('../../schemas/appointmentresponse.schema');

// Arguments
const AppointmentResponseArgs = require('../../parameters/appointmentresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	appointmentresponseResolver,
	appointmentresponseListResolver,
	appointmentresponseInstanceResolver
} = require('./resolver');

/**
 * @name exports.AppointmentResponseQuery
 * @summary AppointmentResponse Query.
 */
module.exports.AppointmentResponseQuery = {
	args: Object.assign({}, CommonArgs, AppointmentResponseArgs),
	description: 'Query for a single AppointmentResponse',
	resolve: appointmentresponseResolver,
	type: AppointmentResponseSchema
};

/**
 * @name exports.AppointmentResponseListQuery
 * @summary AppointmentResponseList Query.
 */
module.exports.AppointmentResponseListQuery = {
	args: Object.assign({}, CommonArgs, AppointmentResponseArgs),
	description: 'Query for multiple AppointmentResponses',
	resolve: appointmentresponseListResolver,
	type: BundleSchema
};

/**
 * @name exports.AppointmentResponseInstanceQuery
 * @summary AppointmentResponseInstance Query.
 */
module.exports.AppointmentResponseInstanceQuery = {
	description: 'Get information about a single AppointmentResponse',
	resolve: appointmentresponseInstanceResolver,
	type: AppointmentResponseSchema
};
