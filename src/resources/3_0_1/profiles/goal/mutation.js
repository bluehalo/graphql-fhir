// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const GoalSchema = require('../../schemas/goal.schema');

// Inputs
const GoalInput = require('../../inputs/goal.input');


const {
	goalCreateResolver,
	goalUpdateResolver,
	goalDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Goal record.'
	},
	resource: {
		type: GoalInput,
		description: 'Goal Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Goal record for deletion.'
	}
};

/**
 * @name exports.GoalCreateMutation
 * @summary GoalCreate Mutation.
 */
module.exports.GoalCreateMutation = {
	args: WriteArgs,
	description: 'Create a Goal',
	resolve: goalCreateResolver,
	type: GoalSchema
};

/**
 * @name exports.GoalUpdateMutation
 * @summary GoalUpdate Mutation.
 */
module.exports.GoalUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Goals',
	resolve: goalUpdateResolver,
	type: GoalSchema
};

/**
 * @name exports.GoalDeleteMutation
 * @summary GoalDelete Mutation.
 */
module.exports.GoalDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Goal',
	resolve: goalDeleteResolver,
	type: GoalSchema
};
