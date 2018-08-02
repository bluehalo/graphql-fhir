// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ConditionSchema = require('../../schemas/condition.schema');

// Inputs
const ConditionInput = require('../../inputs/condition.input');


const {
	conditionCreateResolver,
	conditionUpdateResolver,
	conditionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Condition record.'
	},
	resource: {
		type: ConditionInput,
		description: 'Condition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Condition record for deletion.'
	}
};

/**
 * @name exports.ConditionCreateMutation
 * @summary ConditionCreate Mutation.
 */
module.exports.ConditionCreateMutation = {
	args: WriteArgs,
	description: 'Create a Condition',
	resolve: conditionCreateResolver,
	type: ConditionSchema
};

/**
 * @name exports.ConditionUpdateMutation
 * @summary ConditionUpdate Mutation.
 */
module.exports.ConditionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Conditions',
	resolve: conditionUpdateResolver,
	type: ConditionSchema
};

/**
 * @name exports.ConditionDeleteMutation
 * @summary ConditionDelete Mutation.
 */
module.exports.ConditionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Condition',
	resolve: conditionDeleteResolver,
	type: ConditionSchema
};
