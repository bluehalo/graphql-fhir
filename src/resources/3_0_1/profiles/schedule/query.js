// Schemas
const ScheduleSchema = require('../../schemas/schedule.schema');

// Arguments
const ScheduleArgs = require('../../parameters/schedule.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	scheduleResolver,
	scheduleListResolver,
	scheduleInstanceResolver
} = require('./resolver');

/**
 * @name exports.ScheduleQuery
 * @summary Schedule Query.
 */
module.exports.ScheduleQuery = {
	args: Object.assign({}, CommonArgs, ScheduleArgs),
	description: 'Query for a single Schedule',
	resolve: scheduleResolver,
	type: ScheduleSchema
};

/**
 * @name exports.ScheduleListQuery
 * @summary ScheduleList Query.
 */
module.exports.ScheduleListQuery = {
	args: Object.assign({}, CommonArgs, ScheduleArgs),
	description: 'Query for multiple Schedules',
	resolve: scheduleListResolver,
	type: new GraphQLList(ScheduleSchema)
};

/**
 * @name exports.ScheduleInstanceQuery
 * @summary ScheduleInstance Query.
 */
module.exports.ScheduleInstanceQuery = {
	description: 'Get information about a single Schedule',
	resolve: scheduleInstanceResolver,
	type: ScheduleSchema
};
