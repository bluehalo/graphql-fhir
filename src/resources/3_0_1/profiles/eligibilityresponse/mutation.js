// Schemas
const EligibilityResponseSchema = require('../../schemas/eligibilityresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EligibilityResponseInput = require('../../inputs/eligibilityresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEligibilityResponse,
	updateEligibilityResponse,
	removeEligibilityResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EligibilityResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EligibilityResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(EligibilityResponseInput),
		description: 'EligibilityResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EligibilityResponse record for deletion.',
	},
};

/**
 * @name exports.EligibilityResponseCreateMutation
 * @summary EligibilityResponseCreate mutation.
 */
module.exports.EligibilityResponseCreateMutation = {
	description: 'Create a EligibilityResponse record',
	resolve: scopeInvariant(scopeOptions, createEligibilityResponse),
	type: EligibilityResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.EligibilityResponseUpdateMutation
 * @summary EligibilityResponseUpdate mutation.
 */
module.exports.EligibilityResponseUpdateMutation = {
	description: 'Update a EligibilityResponse record',
	resolve: scopeInvariant(scopeOptions, updateEligibilityResponse),
	type: EligibilityResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.EligibilityResponseRemoveMutation
 * @summary EligibilityResponseRemove mutation.
 */
module.exports.EligibilityResponseRemoveMutation = {
	description: 'Remove a EligibilityResponse record',
	resolve: scopeInvariant(scopeOptions, removeEligibilityResponse),
	type: EligibilityResponseSchema,
	args: DeleteArgs,
};
