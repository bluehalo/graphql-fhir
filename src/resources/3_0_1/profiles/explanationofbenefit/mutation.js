// Schemas
const ExplanationOfBenefitSchema = require('../../schemas/explanationofbenefit.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ExplanationOfBenefitInput = require('../../inputs/explanationofbenefit.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createExplanationOfBenefit,
	updateExplanationOfBenefit,
	removeExplanationOfBenefit,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ExplanationOfBenefit',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ExplanationOfBenefit record.',
	},
	resource: {
		type: new GraphQLNonNull(ExplanationOfBenefitInput),
		description: 'ExplanationOfBenefit Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ExplanationOfBenefit record for deletion.',
	},
};

/**
 * @name exports.ExplanationOfBenefitCreateMutation
 * @summary ExplanationOfBenefitCreate mutation.
 */
module.exports.ExplanationOfBenefitCreateMutation = {
	description: 'Create a ExplanationOfBenefit record',
	resolve: scopeInvariant(scopeOptions, createExplanationOfBenefit),
	type: ExplanationOfBenefitSchema,
	args: WriteArgs,
};

/**
 * @name exports.ExplanationOfBenefitUpdateMutation
 * @summary ExplanationOfBenefitUpdate mutation.
 */
module.exports.ExplanationOfBenefitUpdateMutation = {
	description: 'Update a ExplanationOfBenefit record',
	resolve: scopeInvariant(scopeOptions, updateExplanationOfBenefit),
	type: ExplanationOfBenefitSchema,
	args: WriteArgs,
};

/**
 * @name exports.ExplanationOfBenefitRemoveMutation
 * @summary ExplanationOfBenefitRemove mutation.
 */
module.exports.ExplanationOfBenefitRemoveMutation = {
	description: 'Remove a ExplanationOfBenefit record',
	resolve: scopeInvariant(scopeOptions, removeExplanationOfBenefit),
	type: ExplanationOfBenefitSchema,
	args: DeleteArgs,
};
