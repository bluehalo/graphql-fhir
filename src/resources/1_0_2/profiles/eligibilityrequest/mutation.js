// Schemas
const EligibilityRequestSchema = require('../../schemas/eligibilityrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EligibilityRequestInput = require('../../inputs/eligibilityrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEligibilityRequest,
	updateEligibilityRequest,
	removeEligibilityRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EligibilityRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EligibilityRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(EligibilityRequestInput),
		description: 'EligibilityRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EligibilityRequest record for deletion.',
	},
};

/**
 * @name exports.EligibilityRequestCreateMutation
 * @summary EligibilityRequestCreate mutation.
 */
module.exports.EligibilityRequestCreateMutation = {
	description: 'Create a EligibilityRequest record',
	resolve: scopeInvariant(scopeOptions, createEligibilityRequest),
	type: EligibilityRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.EligibilityRequestUpdateMutation
 * @summary EligibilityRequestUpdate mutation.
 */
module.exports.EligibilityRequestUpdateMutation = {
	description: 'Update a EligibilityRequest record',
	resolve: scopeInvariant(scopeOptions, updateEligibilityRequest),
	type: EligibilityRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.EligibilityRequestRemoveMutation
 * @summary EligibilityRequestRemove mutation.
 */
module.exports.EligibilityRequestRemoveMutation = {
	description: 'Remove a EligibilityRequest record',
	resolve: scopeInvariant(scopeOptions, removeEligibilityRequest),
	type: EligibilityRequestSchema,
	args: DeleteArgs,
};
