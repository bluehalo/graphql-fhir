// Schemas
const EnrollmentRequestSchema = require('../../schemas/enrollmentrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EnrollmentRequestInput = require('../../inputs/enrollmentrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEnrollmentRequest,
	updateEnrollmentRequest,
	removeEnrollmentRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EnrollmentRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EnrollmentRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(EnrollmentRequestInput),
		description: 'EnrollmentRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EnrollmentRequest record for deletion.',
	},
};

/**
 * @name exports.EnrollmentRequestCreateMutation
 * @summary EnrollmentRequestCreate mutation.
 */
module.exports.EnrollmentRequestCreateMutation = {
	description: 'Create a EnrollmentRequest record',
	resolve: scopeInvariant(scopeOptions, createEnrollmentRequest),
	type: EnrollmentRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.EnrollmentRequestUpdateMutation
 * @summary EnrollmentRequestUpdate mutation.
 */
module.exports.EnrollmentRequestUpdateMutation = {
	description: 'Update a EnrollmentRequest record',
	resolve: scopeInvariant(scopeOptions, updateEnrollmentRequest),
	type: EnrollmentRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.EnrollmentRequestRemoveMutation
 * @summary EnrollmentRequestRemove mutation.
 */
module.exports.EnrollmentRequestRemoveMutation = {
	description: 'Remove a EnrollmentRequest record',
	resolve: scopeInvariant(scopeOptions, removeEnrollmentRequest),
	type: EnrollmentRequestSchema,
	args: DeleteArgs,
};
