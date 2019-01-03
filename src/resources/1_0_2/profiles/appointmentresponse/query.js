// Schemas
const AppointmentResponseSchema = require('../../schemas/appointmentresponse.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const AppointmentResponseArgs = require('../../parameters/appointmentresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	appointmentresponseResolver,
	appointmentresponseListResolver,
	appointmentresponseInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'AppointmentResponse',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.AppointmentResponseQuery
 * @summary AppointmentResponse Query.
 */
module.exports.AppointmentResponseQuery = {
	args: Object.assign({}, CommonArgs, AppointmentResponseArgs),
	description: 'Query for a single AppointmentResponse',
	resolve: scopeInvariant(scopeOptions, appointmentresponseResolver),
	type: AppointmentResponseSchema,
};

/**
 * @name exports.AppointmentResponseListQuery
 * @summary AppointmentResponseList Query.
 */
module.exports.AppointmentResponseListQuery = {
	args: Object.assign({}, CommonArgs, AppointmentResponseArgs),
	description: 'Query for multiple AppointmentResponses',
	resolve: scopeInvariant(scopeOptions, appointmentresponseListResolver),
	type: BundleSchema,
};

/**
 * @name exports.AppointmentResponseInstanceQuery
 * @summary AppointmentResponseInstance Query.
 */
module.exports.AppointmentResponseInstanceQuery = {
	description: 'Get information about a single AppointmentResponse',
	resolve: scopeInvariant(scopeOptions, appointmentresponseInstanceResolver),
	type: AppointmentResponseSchema,
};
