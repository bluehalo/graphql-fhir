// Schemas
const EnrollmentResponseSchema = require('../../schemas/enrollmentresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EnrollmentResponseInput = require('../../inputs/enrollmentresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEnrollmentResponse,
	updateEnrollmentResponse,
	removeEnrollmentResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EnrollmentResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EnrollmentResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(EnrollmentResponseInput),
		description: 'EnrollmentResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EnrollmentResponse record for deletion.',
	},
};

/**
 * @name exports.EnrollmentResponseCreateMutation
 * @summary EnrollmentResponseCreate mutation.
 */
module.exports.EnrollmentResponseCreateMutation = {
	description: 'Create a EnrollmentResponse record',
	resolve: scopeInvariant(scopeOptions, createEnrollmentResponse),
	type: EnrollmentResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.EnrollmentResponseUpdateMutation
 * @summary EnrollmentResponseUpdate mutation.
 */
module.exports.EnrollmentResponseUpdateMutation = {
	description: 'Update a EnrollmentResponse record',
	resolve: scopeInvariant(scopeOptions, updateEnrollmentResponse),
	type: EnrollmentResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.EnrollmentResponseRemoveMutation
 * @summary EnrollmentResponseRemove mutation.
 */
module.exports.EnrollmentResponseRemoveMutation = {
	description: 'Remove a EnrollmentResponse record',
	resolve: scopeInvariant(scopeOptions, removeEnrollmentResponse),
	type: EnrollmentResponseSchema,
	args: DeleteArgs,
};
