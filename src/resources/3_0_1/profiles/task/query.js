// Schemas
const TaskSchema = require('../../schemas/task.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const TaskArgs = require('../../parameters/task.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	taskResolver,
	taskListResolver,
	taskInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Task',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.TaskQuery
 * @summary Task Query.
 */
module.exports.TaskQuery = {
	args: Object.assign({}, CommonArgs, TaskArgs),
	description: 'Query for a single Task',
	resolve: scopeInvariant(scopeOptions, taskResolver),
	type: TaskSchema
};

/**
 * @name exports.TaskListQuery
 * @summary TaskList Query.
 */
module.exports.TaskListQuery = {
	args: Object.assign({}, CommonArgs, TaskArgs),
	description: 'Query for multiple Tasks',
	resolve: scopeInvariant(scopeOptions, taskListResolver),
	type: BundleSchema
};

/**
 * @name exports.TaskInstanceQuery
 * @summary TaskInstance Query.
 */
module.exports.TaskInstanceQuery = {
	description: 'Get information about a single Task',
	resolve: scopeInvariant(scopeOptions, taskInstanceResolver),
	type: TaskSchema
};
