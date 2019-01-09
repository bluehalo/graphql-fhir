// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const TaskSchema = require('../../schemas/task.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const TaskArgs = require('../../parameters/task.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, TaskArgs);

// Resolvers
const { getTask, getTaskList, getTaskInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Task',
	action: 'read',
};

/**
 * @name exports.TaskQuery
 * @summary Task query.
 */
module.exports.TaskQuery = {
	description: 'Query for a single Task',
	resolve: scopeInvariant(scopeOptions, getTask),
	type: TaskSchema,
	args: args,
};

/**
 * @name exports.TaskListQuery
 * @summary Task query.
 */
module.exports.TaskListQuery = {
	description: 'Query for a more than or just one Task',
	resolve: scopeInvariant(scopeOptions, getTaskList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.TaskInstanceQuery
 * @summary Task query.
 */
module.exports.TaskInstanceQuery = {
	description: 'Access information about a single Task',
	resolve: scopeInvariant(scopeOptions, getTaskInstance),
	type: TaskSchema,
	args: args,
};
