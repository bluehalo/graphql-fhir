// Schemas
const ScheduleSchema = require('../../schemas/schedule.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ScheduleInput = require('../../inputs/schedule.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSchedule,
	updateSchedule,
	removeSchedule,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Schedule',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Schedule record.',
	},
	resource: {
		type: new GraphQLNonNull(ScheduleInput),
		description: 'Schedule Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Schedule record for deletion.',
	},
};

/**
 * @name exports.ScheduleCreateMutation
 * @summary ScheduleCreate mutation.
 */
module.exports.ScheduleCreateMutation = {
	description: 'Create a Schedule record',
	resolve: scopeInvariant(scopeOptions, createSchedule),
	type: ScheduleSchema,
	args: WriteArgs,
};

/**
 * @name exports.ScheduleUpdateMutation
 * @summary ScheduleUpdate mutation.
 */
module.exports.ScheduleUpdateMutation = {
	description: 'Update a Schedule record',
	resolve: scopeInvariant(scopeOptions, updateSchedule),
	type: ScheduleSchema,
	args: WriteArgs,
};

/**
 * @name exports.ScheduleRemoveMutation
 * @summary ScheduleRemove mutation.
 */
module.exports.ScheduleRemoveMutation = {
	description: 'Remove a Schedule record',
	resolve: scopeInvariant(scopeOptions, removeSchedule),
	type: ScheduleSchema,
	args: DeleteArgs,
};
