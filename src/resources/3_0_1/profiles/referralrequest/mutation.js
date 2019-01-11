// Schemas
const ReferralRequestSchema = require('../../schemas/referralrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ReferralRequestInput = require('../../inputs/referralrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createReferralRequest,
	updateReferralRequest,
	removeReferralRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ReferralRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ReferralRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(ReferralRequestInput),
		description: 'ReferralRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ReferralRequest record for deletion.',
	},
};

/**
 * @name exports.ReferralRequestCreateMutation
 * @summary ReferralRequestCreate mutation.
 */
module.exports.ReferralRequestCreateMutation = {
	description: 'Create a ReferralRequest record',
	resolve: scopeInvariant(scopeOptions, createReferralRequest),
	type: ReferralRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ReferralRequestUpdateMutation
 * @summary ReferralRequestUpdate mutation.
 */
module.exports.ReferralRequestUpdateMutation = {
	description: 'Update a ReferralRequest record',
	resolve: scopeInvariant(scopeOptions, updateReferralRequest),
	type: ReferralRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.ReferralRequestRemoveMutation
 * @summary ReferralRequestRemove mutation.
 */
module.exports.ReferralRequestRemoveMutation = {
	description: 'Remove a ReferralRequest record',
	resolve: scopeInvariant(scopeOptions, removeReferralRequest),
	type: ReferralRequestSchema,
	args: DeleteArgs,
};
