// Schemas
const AppointmentResponseSchema = require('../../schemas/appointmentresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const AppointmentResponseInput = require('../../inputs/appointmentresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createAppointmentResponse,
	updateAppointmentResponse,
	removeAppointmentResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'AppointmentResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a AppointmentResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(AppointmentResponseInput),
		description: 'AppointmentResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a AppointmentResponse record for deletion.',
	},
};

/**
 * @name exports.AppointmentResponseCreateMutation
 * @summary AppointmentResponseCreate mutation.
 */
module.exports.AppointmentResponseCreateMutation = {
	description: 'Create a AppointmentResponse record',
	resolve: scopeInvariant(scopeOptions, createAppointmentResponse),
	type: AppointmentResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.AppointmentResponseUpdateMutation
 * @summary AppointmentResponseUpdate mutation.
 */
module.exports.AppointmentResponseUpdateMutation = {
	description: 'Update a AppointmentResponse record',
	resolve: scopeInvariant(scopeOptions, updateAppointmentResponse),
	type: AppointmentResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.AppointmentResponseRemoveMutation
 * @summary AppointmentResponseRemove mutation.
 */
module.exports.AppointmentResponseRemoveMutation = {
	description: 'Remove a AppointmentResponse record',
	resolve: scopeInvariant(scopeOptions, removeAppointmentResponse),
	type: AppointmentResponseSchema,
	args: DeleteArgs,
};
