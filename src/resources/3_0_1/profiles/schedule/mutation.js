// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ScheduleSchema = require('../../schemas/schedule.schema');

// Inputs
const ScheduleInput = require('../../inputs/schedule.input');


const {
	scheduleCreateResolver,
	scheduleUpdateResolver,
	scheduleDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Schedule record.'
	},
	resource: {
		type: ScheduleInput,
		description: 'Schedule Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Schedule record for deletion.'
	}
};

/**
 * @name exports.ScheduleCreateMutation
 * @summary ScheduleCreate Mutation.
 */
module.exports.ScheduleCreateMutation = {
	args: WriteArgs,
	description: 'Create a Schedule',
	resolve: scheduleCreateResolver,
	type: ScheduleSchema
};

/**
 * @name exports.ScheduleUpdateMutation
 * @summary ScheduleUpdate Mutation.
 */
module.exports.ScheduleUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Schedules',
	resolve: scheduleUpdateResolver,
	type: ScheduleSchema
};

/**
 * @name exports.ScheduleDeleteMutation
 * @summary ScheduleDelete Mutation.
 */
module.exports.ScheduleDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Schedule',
	resolve: scheduleDeleteResolver,
	type: ScheduleSchema
};
