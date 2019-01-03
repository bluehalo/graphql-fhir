// Schemas
const ScheduleSchema = require('../../schemas/schedule.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ScheduleArgs = require('../../parameters/schedule.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	scheduleResolver,
	scheduleListResolver,
	scheduleInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Schedule',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ScheduleQuery
 * @summary Schedule Query.
 */
module.exports.ScheduleQuery = {
	args: Object.assign({}, CommonArgs, ScheduleArgs),
	description: 'Query for a single Schedule',
	resolve: scopeInvariant(scopeOptions, scheduleResolver),
	type: ScheduleSchema,
};

/**
 * @name exports.ScheduleListQuery
 * @summary ScheduleList Query.
 */
module.exports.ScheduleListQuery = {
	args: Object.assign({}, CommonArgs, ScheduleArgs),
	description: 'Query for multiple Schedules',
	resolve: scopeInvariant(scopeOptions, scheduleListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ScheduleInstanceQuery
 * @summary ScheduleInstance Query.
 */
module.exports.ScheduleInstanceQuery = {
	description: 'Get information about a single Schedule',
	resolve: scopeInvariant(scopeOptions, scheduleInstanceResolver),
	type: ScheduleSchema,
};
