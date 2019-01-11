// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ScheduleSchema = require('../../schemas/schedule.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ScheduleArgs = require('../../parameters/schedule.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, ScheduleArgs);

// Resolvers
const {
	getSchedule,
	getScheduleList,
	getScheduleInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Schedule',
	action: 'read',
};

/**
 * @name exports.ScheduleQuery
 * @summary Schedule query.
 */
module.exports.ScheduleQuery = {
	description: 'Query for a single Schedule',
	resolve: scopeInvariant(scopeOptions, getSchedule),
	type: ScheduleSchema,
	args: args,
};

/**
 * @name exports.ScheduleListQuery
 * @summary Schedule query.
 */
module.exports.ScheduleListQuery = {
	description: 'Query for a more than or just one Schedule',
	resolve: scopeInvariant(scopeOptions, getScheduleList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ScheduleInstanceQuery
 * @summary Schedule query.
 */
module.exports.ScheduleInstanceQuery = {
	description: 'Access information about a single Schedule',
	resolve: scopeInvariant(scopeOptions, getScheduleInstance),
	type: ScheduleSchema,
	args: args,
};
