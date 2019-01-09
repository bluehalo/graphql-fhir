// Schemas
const CoverageEligibilityRequestSchema = require('../../schemas/coverageeligibilityrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CoverageEligibilityRequestInput = require('../../inputs/coverageeligibilityrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCoverageEligibilityRequest,
	updateCoverageEligibilityRequest,
	removeCoverageEligibilityRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CoverageEligibilityRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a CoverageEligibilityRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(CoverageEligibilityRequestInput),
		description: 'CoverageEligibilityRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CoverageEligibilityRequest record for deletion.',
	},
};

/**
 * @name exports.CoverageEligibilityRequestCreateMutation
 * @summary CoverageEligibilityRequestCreate mutation.
 */
module.exports.CoverageEligibilityRequestCreateMutation = {
	description: 'Create a CoverageEligibilityRequest record',
	resolve: scopeInvariant(scopeOptions, createCoverageEligibilityRequest),
	type: CoverageEligibilityRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.CoverageEligibilityRequestUpdateMutation
 * @summary CoverageEligibilityRequestUpdate mutation.
 */
module.exports.CoverageEligibilityRequestUpdateMutation = {
	description: 'Update a CoverageEligibilityRequest record',
	resolve: scopeInvariant(scopeOptions, updateCoverageEligibilityRequest),
	type: CoverageEligibilityRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.CoverageEligibilityRequestRemoveMutation
 * @summary CoverageEligibilityRequestRemove mutation.
 */
module.exports.CoverageEligibilityRequestRemoveMutation = {
	description: 'Remove a CoverageEligibilityRequest record',
	resolve: scopeInvariant(scopeOptions, removeCoverageEligibilityRequest),
	type: CoverageEligibilityRequestSchema,
	args: DeleteArgs,
};
