// Schemas
const ConditionSchema = require('../../schemas/condition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ConditionInput = require('../../inputs/condition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCondition,
	updateCondition,
	removeCondition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Condition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Condition record.',
	},
	resource: {
		type: new GraphQLNonNull(ConditionInput),
		description: 'Condition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Condition record for deletion.',
	},
};

/**
 * @name exports.ConditionCreateMutation
 * @summary ConditionCreate mutation.
 */
module.exports.ConditionCreateMutation = {
	description: 'Create a Condition record',
	resolve: scopeInvariant(scopeOptions, createCondition),
	type: ConditionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConditionUpdateMutation
 * @summary ConditionUpdate mutation.
 */
module.exports.ConditionUpdateMutation = {
	description: 'Update a Condition record',
	resolve: scopeInvariant(scopeOptions, updateCondition),
	type: ConditionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ConditionRemoveMutation
 * @summary ConditionRemove mutation.
 */
module.exports.ConditionRemoveMutation = {
	description: 'Remove a Condition record',
	resolve: scopeInvariant(scopeOptions, removeCondition),
	type: ConditionSchema,
	args: DeleteArgs,
};
