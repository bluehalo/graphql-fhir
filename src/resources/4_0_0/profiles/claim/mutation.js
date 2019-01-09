// Schemas
const ClaimSchema = require('../../schemas/claim.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ClaimInput = require('../../inputs/claim.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createClaim, updateClaim, removeClaim } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Claim',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Claim record.',
	},
	resource: {
		type: new GraphQLNonNull(ClaimInput),
		description: 'Claim Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Claim record for deletion.',
	},
};

/**
 * @name exports.ClaimCreateMutation
 * @summary ClaimCreate mutation.
 */
module.exports.ClaimCreateMutation = {
	description: 'Create a Claim record',
	resolve: scopeInvariant(scopeOptions, createClaim),
	type: ClaimSchema,
	args: WriteArgs,
};

/**
 * @name exports.ClaimUpdateMutation
 * @summary ClaimUpdate mutation.
 */
module.exports.ClaimUpdateMutation = {
	description: 'Update a Claim record',
	resolve: scopeInvariant(scopeOptions, updateClaim),
	type: ClaimSchema,
	args: WriteArgs,
};

/**
 * @name exports.ClaimRemoveMutation
 * @summary ClaimRemove mutation.
 */
module.exports.ClaimRemoveMutation = {
	description: 'Remove a Claim record',
	resolve: scopeInvariant(scopeOptions, removeClaim),
	type: ClaimSchema,
	args: DeleteArgs,
};
