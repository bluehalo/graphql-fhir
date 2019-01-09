// Schemas
const ClaimResponseSchema = require('../../schemas/claimresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ClaimResponseInput = require('../../inputs/claimresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createClaimResponse,
	updateClaimResponse,
	removeClaimResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ClaimResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ClaimResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(ClaimResponseInput),
		description: 'ClaimResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ClaimResponse record for deletion.',
	},
};

/**
 * @name exports.ClaimResponseCreateMutation
 * @summary ClaimResponseCreate mutation.
 */
module.exports.ClaimResponseCreateMutation = {
	description: 'Create a ClaimResponse record',
	resolve: scopeInvariant(scopeOptions, createClaimResponse),
	type: ClaimResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.ClaimResponseUpdateMutation
 * @summary ClaimResponseUpdate mutation.
 */
module.exports.ClaimResponseUpdateMutation = {
	description: 'Update a ClaimResponse record',
	resolve: scopeInvariant(scopeOptions, updateClaimResponse),
	type: ClaimResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.ClaimResponseRemoveMutation
 * @summary ClaimResponseRemove mutation.
 */
module.exports.ClaimResponseRemoveMutation = {
	description: 'Remove a ClaimResponse record',
	resolve: scopeInvariant(scopeOptions, removeClaimResponse),
	type: ClaimResponseSchema,
	args: DeleteArgs,
};
