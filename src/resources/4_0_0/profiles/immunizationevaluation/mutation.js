// Schemas
const ImmunizationEvaluationSchema = require('../../schemas/immunizationevaluation.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ImmunizationEvaluationInput = require('../../inputs/immunizationevaluation.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createImmunizationEvaluation,
	updateImmunizationEvaluation,
	removeImmunizationEvaluation,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ImmunizationEvaluation',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ImmunizationEvaluation record.',
	},
	resource: {
		type: new GraphQLNonNull(ImmunizationEvaluationInput),
		description: 'ImmunizationEvaluation Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ImmunizationEvaluation record for deletion.',
	},
};

/**
 * @name exports.ImmunizationEvaluationCreateMutation
 * @summary ImmunizationEvaluationCreate mutation.
 */
module.exports.ImmunizationEvaluationCreateMutation = {
	description: 'Create a ImmunizationEvaluation record',
	resolve: scopeInvariant(scopeOptions, createImmunizationEvaluation),
	type: ImmunizationEvaluationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImmunizationEvaluationUpdateMutation
 * @summary ImmunizationEvaluationUpdate mutation.
 */
module.exports.ImmunizationEvaluationUpdateMutation = {
	description: 'Update a ImmunizationEvaluation record',
	resolve: scopeInvariant(scopeOptions, updateImmunizationEvaluation),
	type: ImmunizationEvaluationSchema,
	args: WriteArgs,
};

/**
 * @name exports.ImmunizationEvaluationRemoveMutation
 * @summary ImmunizationEvaluationRemove mutation.
 */
module.exports.ImmunizationEvaluationRemoveMutation = {
	description: 'Remove a ImmunizationEvaluation record',
	resolve: scopeInvariant(scopeOptions, removeImmunizationEvaluation),
	type: ImmunizationEvaluationSchema,
	args: DeleteArgs,
};
