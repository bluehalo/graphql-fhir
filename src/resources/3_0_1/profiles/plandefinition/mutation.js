// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PlanDefinitionSchema = require('../../schemas/plandefinition.schema');

// Inputs
const PlanDefinitionInput = require('../../inputs/plandefinition.input');

// Resolvers
const {
	plandefinitionCreateResolver,
	plandefinitionUpdateResolver,
	plandefinitionDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PlanDefinition',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a PlanDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(PlanDefinitionInput),
		description: 'PlanDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a PlanDefinition record for deletion.',
	},
};

/**
 * @name exports.PlanDefinitionCreateMutation
 * @summary PlanDefinitionCreate Mutation.
 */
module.exports.PlanDefinitionCreateMutation = {
	args: WriteArgs,
	description: 'Create a PlanDefinition',
	resolve: scopeInvariant(scopeOptions, plandefinitionCreateResolver),
	type: PlanDefinitionSchema,
};

/**
 * @name exports.PlanDefinitionUpdateMutation
 * @summary PlanDefinitionUpdate Mutation.
 */
module.exports.PlanDefinitionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple PlanDefinitions',
	resolve: scopeInvariant(scopeOptions, plandefinitionUpdateResolver),
	type: PlanDefinitionSchema,
};

/**
 * @name exports.PlanDefinitionDeleteMutation
 * @summary PlanDefinitionDelete Mutation.
 */
module.exports.PlanDefinitionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single PlanDefinition',
	resolve: scopeInvariant(scopeOptions, plandefinitionDeleteResolver),
	type: PlanDefinitionSchema,
};
