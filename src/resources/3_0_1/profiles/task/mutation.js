// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const TaskSchema = require('../../schemas/task.schema');

// Inputs
const TaskInput = require('../../inputs/task.input');


const {
	taskCreateResolver,
	taskUpdateResolver,
	taskDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Task record.'
	},
	resource: {
		type: TaskInput,
		description: 'Task Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: taskCreateResolver,
	type: TaskSchema
};

/**
 * @name exports.TaskUpdateMutation
 * @summary TaskUpdate Mutation.
 */
module.exports.TaskUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Tasks',
	resolve: taskUpdateResolver,
	type: TaskSchema
};

/**
 * @name exports.TaskDeleteMutation
 * @summary TaskDelete Mutation.
 */
module.exports.TaskDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Task',
	resolve: taskDeleteResolver,
	type: TaskSchema
};
