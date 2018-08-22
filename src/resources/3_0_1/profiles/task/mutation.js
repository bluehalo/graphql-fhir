// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const TaskSchema = require('../../schemas/task.schema');

// Inputs
const TaskInput = require('../../inputs/task.input');

// Resolvers
const {
	taskCreateResolver,
	taskUpdateResolver,
	taskDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Task',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Task record.'
	},
	resource: {
		type: new GraphQLNonNull(TaskInput),
		description: 'Task Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Task record for deletion.'
	}
};

/**
 * @name exports.TaskCreateMutation
 * @summary TaskCreate Mutation.
 */
module.exports.TaskCreateMutation = {
	args: WriteArgs,
	description: 'Create a Task',
	resolve: scopeInvariant(scopeOptions, taskCreateResolver),
	type: TaskSchema
};

/**
 * @name exports.TaskUpdateMutation
 * @summary TaskUpdate Mutation.
 */
module.exports.TaskUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Tasks',
	resolve: scopeInvariant(scopeOptions, taskUpdateResolver),
	type: TaskSchema
};

/**
 * @name exports.TaskDeleteMutation
 * @summary TaskDelete Mutation.
 */
module.exports.TaskDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Task',
	resolve: scopeInvariant(scopeOptions, taskDeleteResolver),
	type: TaskSchema
};
