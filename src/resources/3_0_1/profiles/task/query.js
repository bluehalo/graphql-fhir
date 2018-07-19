// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const TaskSchema = require('../../schemas/task.schema');

// Arguments
const TaskArgs = require('../../parameters/task.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	taskResolver,
	taskListResolver,
	taskInstanceResolver
} = require('./resolver');

/**
 * @name exports.TaskQuery
 * @summary Task Query.
 */
module.exports.TaskQuery = {
	args: Object.assign({}, CommonArgs, TaskArgs),
	description: 'Query for a single Task',
	resolve: taskResolver,
	type: TaskSchema
};

/**
 * @name exports.TaskListQuery
 * @summary TaskList Query.
 */
module.exports.TaskListQuery = {
	args: Object.assign({}, CommonArgs, TaskArgs),
	description: 'Query for multiple Tasks',
	resolve: taskListResolver,
	type: BundleSchema
};

/**
 * @name exports.TaskInstanceQuery
 * @summary TaskInstance Query.
 */
module.exports.TaskInstanceQuery = {
	description: 'Get information about a single Task',
	resolve: taskInstanceResolver,
	type: TaskSchema
};
