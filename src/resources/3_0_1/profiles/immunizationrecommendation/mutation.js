// Schemas
const ImmunizationRecommendationSchema = require('../../schemas/immunizationrecommendation.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ImmunizationRecommendationInput = require('../../inputs/immunizationrecommendation.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createImmunizationRecommendation,
	updateImmunizationRecommendation,
	removeImmunizationRecommendation,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImmunizationRecommendation',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ImmunizationRecommendation record.',
	},
	resource: {
		type: new GraphQLNonNull(ImmunizationRecommendationInput),
		description: 'ImmunizationRecommendation Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ImmunizationRecommendation record for deletion.',
	},
};

/**
 * @name exports.ImmunizationRecommendationCreateMutation
 * @summary ImmunizationRecommendationCreate mutation.
 */
module.exports.ImmunizationRecommendationCreateMutation = {
	description: 'Create a ImmunizationRecommendation record',
	resolve: scopeInvariant(scopeOptions, createImmunizationRecommendation),
	type: ImmunizationRecommendationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImmunizationRecommendationUpdateMutation
 * @summary ImmunizationRecommendationUpdate mutation.
 */
module.exports.ImmunizationRecommendationUpdateMutation = {
	description: 'Update a ImmunizationRecommendation record',
	resolve: scopeInvariant(scopeOptions, updateImmunizationRecommendation),
	type: ImmunizationRecommendationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImmunizationRecommendationRemoveMutation
 * @summary ImmunizationRecommendationRemove mutation.
 */
module.exports.ImmunizationRecommendationRemoveMutation = {
	description: 'Remove a ImmunizationRecommendation record',
	resolve: scopeInvariant(scopeOptions, removeImmunizationRecommendation),
	type: ImmunizationRecommendationSchema,
	args: DeleteArgs,
};
