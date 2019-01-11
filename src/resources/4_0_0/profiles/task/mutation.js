// Schemas
const TaskSchema = require('../../schemas/task.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const TaskInput = require('../../inputs/task.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const { createTask, updateTask, removeTask } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Task',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Task record.',
	},
	resource: {
		type: new GraphQLNonNull(TaskInput),
		description: 'Task Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description: 'Unique identifier for selecting a Task record for deletion.',
	},
};

/**
 * @name exports.TaskCreateMutation
 * @summary TaskCreate mutation.
 */
module.exports.TaskCreateMutation = {
	description: 'Create a Task record',
	resolve: scopeInvariant(scopeOptions, createTask),
	type: TaskSchema,
	args: WriteArgs,
};

/**
 * @name exports.TaskUpdateMutation
 * @summary TaskUpdate mutation.
 */
module.exports.TaskUpdateMutation = {
	description: 'Update a Task record',
	resolve: scopeInvariant(scopeOptions, updateTask),
	type: TaskSchema,
	args: WriteArgs,
};

/**
 * @name exports.TaskRemoveMutation
 * @summary TaskRemove mutation.
 */
module.exports.TaskRemoveMutation = {
	description: 'Remove a Task record',
	resolve: scopeInvariant(scopeOptions, removeTask),
	type: TaskSchema,
	args: DeleteArgs,
};
