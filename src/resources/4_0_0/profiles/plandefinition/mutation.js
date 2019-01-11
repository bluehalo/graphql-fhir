// Schemas
const PlanDefinitionSchema = require('../../schemas/plandefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const PlanDefinitionInput = require('../../inputs/plandefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createPlanDefinition,
	updatePlanDefinition,
	removePlanDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PlanDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
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
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a PlanDefinition record for deletion.',
	},
};

/**
 * @name exports.PlanDefinitionCreateMutation
 * @summary PlanDefinitionCreate mutation.
 */
module.exports.PlanDefinitionCreateMutation = {
	description: 'Create a PlanDefinition record',
	resolve: scopeInvariant(scopeOptions, createPlanDefinition),
	type: PlanDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.PlanDefinitionUpdateMutation
 * @summary PlanDefinitionUpdate mutation.
 */
module.exports.PlanDefinitionUpdateMutation = {
	description: 'Update a PlanDefinition record',
	resolve: scopeInvariant(scopeOptions, updatePlanDefinition),
	type: PlanDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.PlanDefinitionRemoveMutation
 * @summary PlanDefinitionRemove mutation.
 */
module.exports.PlanDefinitionRemoveMutation = {
	description: 'Remove a PlanDefinition record',
	resolve: scopeInvariant(scopeOptions, removePlanDefinition),
	type: PlanDefinitionSchema,
	args: DeleteArgs,
};
