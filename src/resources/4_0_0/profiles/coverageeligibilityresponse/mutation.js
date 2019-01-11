// Schemas
const CoverageEligibilityResponseSchema = require('../../schemas/coverageeligibilityresponse.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CoverageEligibilityResponseInput = require('../../inputs/coverageeligibilityresponse.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCoverageEligibilityResponse,
	updateCoverageEligibilityResponse,
	removeCoverageEligibilityResponse,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CoverageEligibilityResponse',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a CoverageEligibilityResponse record.',
	},
	resource: {
		type: new GraphQLNonNull(CoverageEligibilityResponseInput),
		description: 'CoverageEligibilityResponse Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CoverageEligibilityResponse record for deletion.',
	},
};

/**
 * @name exports.CoverageEligibilityResponseCreateMutation
 * @summary CoverageEligibilityResponseCreate mutation.
 */
module.exports.CoverageEligibilityResponseCreateMutation = {
	description: 'Create a CoverageEligibilityResponse record',
	resolve: scopeInvariant(scopeOptions, createCoverageEligibilityResponse),
	type: CoverageEligibilityResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.CoverageEligibilityResponseUpdateMutation
 * @summary CoverageEligibilityResponseUpdate mutation.
 */
module.exports.CoverageEligibilityResponseUpdateMutation = {
	description: 'Update a CoverageEligibilityResponse record',
	resolve: scopeInvariant(scopeOptions, updateCoverageEligibilityResponse),
	type: CoverageEligibilityResponseSchema,
	args: WriteArgs,
};

/**
 * @name exports.CoverageEligibilityResponseRemoveMutation
 * @summary CoverageEligibilityResponseRemove mutation.
 */
module.exports.CoverageEligibilityResponseRemoveMutation = {
	description: 'Remove a CoverageEligibilityResponse record',
	resolve: scopeInvariant(scopeOptions, removeCoverageEligibilityResponse),
	type: CoverageEligibilityResponseSchema,
	args: DeleteArgs,
};
