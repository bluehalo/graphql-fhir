// Schemas
const VerificationResultSchema = require('../../schemas/verificationresult.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const VerificationResultInput = require('../../inputs/verificationresult.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createVerificationResult,
	updateVerificationResult,
	removeVerificationResult,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'VerificationResult',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a VerificationResult record.',
	},
	resource: {
		type: new GraphQLNonNull(VerificationResultInput),
		description: 'VerificationResult Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a VerificationResult record for deletion.',
	},
};

/**
 * @name exports.VerificationResultCreateMutation
 * @summary VerificationResultCreate mutation.
 */
module.exports.VerificationResultCreateMutation = {
	description: 'Create a VerificationResult record',
	resolve: scopeInvariant(scopeOptions, createVerificationResult),
	type: VerificationResultSchema,
	args: WriteArgs,
};

/**
 * @name exports.VerificationResultUpdateMutation
 * @summary VerificationResultUpdate mutation.
 */
module.exports.VerificationResultUpdateMutation = {
	description: 'Update a VerificationResult record',
	resolve: scopeInvariant(scopeOptions, updateVerificationResult),
	type: VerificationResultSchema,
	args: WriteArgs,
};

/**
 * @name exports.VerificationResultRemoveMutation
 * @summary VerificationResultRemove mutation.
 */
module.exports.VerificationResultRemoveMutation = {
	description: 'Remove a VerificationResult record',
	resolve: scopeInvariant(scopeOptions, removeVerificationResult),
	type: VerificationResultSchema,
	args: DeleteArgs,
};
