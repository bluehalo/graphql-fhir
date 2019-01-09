// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const AppointmentResponseSchema = require('../../schemas/appointmentresponse.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const AppointmentResponseArgs = require('../../parameters/appointmentresponse.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	AppointmentResponseArgs,
);

// Resolvers
const {
	getAppointmentResponse,
	getAppointmentResponseList,
	getAppointmentResponseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AppointmentResponse',
	action: 'read',
};

/**
 * @name exports.AppointmentResponseQuery
 * @summary AppointmentResponse query.
 */
module.exports.AppointmentResponseQuery = {
	description: 'Query for a single AppointmentResponse',
	resolve: scopeInvariant(scopeOptions, getAppointmentResponse),
	type: AppointmentResponseSchema,
	args: args,
};

/**
 * @name exports.AppointmentResponseListQuery
 * @summary AppointmentResponse query.
 */
module.exports.AppointmentResponseListQuery = {
	description: 'Query for a more than or just one AppointmentResponse',
	resolve: scopeInvariant(scopeOptions, getAppointmentResponseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.AppointmentResponseInstanceQuery
 * @summary AppointmentResponse query.
 */
module.exports.AppointmentResponseInstanceQuery = {
	description: 'Access information about a single AppointmentResponse',
	resolve: scopeInvariant(scopeOptions, getAppointmentResponseInstance),
	type: AppointmentResponseSchema,
	args: args,
};
