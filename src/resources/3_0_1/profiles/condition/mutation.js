// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ConditionSchema = require('../../schemas/condition.schema');

// Inputs
const ConditionInput = require('../../inputs/condition.input');

// Resolvers
const {
	conditionCreateResolver,
	conditionUpdateResolver,
	conditionDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Condition',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Condition record.'
	},
	resource: {
		type: new GraphQLNonNull(ConditionInput),
		description: 'Condition Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, conditionCreateResolver),
	type: ConditionSchema
};

/**
 * @name exports.ConditionUpdateMutation
 * @summary ConditionUpdate Mutation.
 */
module.exports.ConditionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Conditions',
	resolve: scopeInvariant(scopeOptions, conditionUpdateResolver),
	type: ConditionSchema
};

/**
 * @name exports.ConditionDeleteMutation
 * @summary ConditionDelete Mutation.
 */
module.exports.ConditionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Condition',
	resolve: scopeInvariant(scopeOptions, conditionDeleteResolver),
	type: ConditionSchema
};
