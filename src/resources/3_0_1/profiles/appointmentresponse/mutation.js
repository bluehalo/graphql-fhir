// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AppointmentResponseSchema = require('../../schemas/appointmentresponse.schema');

// Inputs
const AppointmentResponseInput = require('../../inputs/appointmentresponse.input');

// Resolvers
const {
	appointmentresponseCreateResolver,
	appointmentresponseUpdateResolver,
	appointmentresponseDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'AppointmentResponse',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a AppointmentResponse record for deletion.',
	},
};

/**
 * @name exports.AppointmentResponseCreateMutation
 * @summary AppointmentResponseCreate Mutation.
 */
module.exports.AppointmentResponseCreateMutation = {
	args: WriteArgs,
	description: 'Create a AppointmentResponse',
	resolve: scopeInvariant(scopeOptions, appointmentresponseCreateResolver),
	type: AppointmentResponseSchema,
};

/**
 * @name exports.AppointmentResponseUpdateMutation
 * @summary AppointmentResponseUpdate Mutation.
 */
module.exports.AppointmentResponseUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple AppointmentResponses',
	resolve: scopeInvariant(scopeOptions, appointmentresponseUpdateResolver),
	type: AppointmentResponseSchema,
};

/**
 * @name exports.AppointmentResponseDeleteMutation
 * @summary AppointmentResponseDelete Mutation.
 */
module.exports.AppointmentResponseDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single AppointmentResponse',
	resolve: scopeInvariant(scopeOptions, appointmentresponseDeleteResolver),
	type: AppointmentResponseSchema,
};
