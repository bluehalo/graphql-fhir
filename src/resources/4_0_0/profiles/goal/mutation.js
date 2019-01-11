// Schemas
const GoalSchema = require('../../schemas/goal.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const GoalInput = require('../../inputs/goal.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createGoal, updateGoal, removeGoal } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Goal',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Goal record.',
	},
	resource: {
		type: new GraphQLNonNull(GoalInput),
		description: 'Goal Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Goal record for deletion.',
	},
};

/**
 * @name exports.GoalCreateMutation
 * @summary GoalCreate mutation.
 */
module.exports.GoalCreateMutation = {
	description: 'Create a Goal record',
	resolve: scopeInvariant(scopeOptions, createGoal),
	type: GoalSchema,
	args: WriteArgs,
};

/**
 * @name exports.GoalUpdateMutation
 * @summary GoalUpdate mutation.
 */
module.exports.GoalUpdateMutation = {
	description: 'Update a Goal record',
	resolve: scopeInvariant(scopeOptions, updateGoal),
	type: GoalSchema,
	args: WriteArgs,
};

/**
 * @name exports.GoalRemoveMutation
 * @summary GoalRemove mutation.
 */
module.exports.GoalRemoveMutation = {
	description: 'Remove a Goal record',
	resolve: scopeInvariant(scopeOptions, removeGoal),
	type: GoalSchema,
	args: DeleteArgs,
};
