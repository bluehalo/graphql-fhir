// Schemas
const ActivityDefinitionSchema = require('../../schemas/activitydefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const ActivityDefinitionInput = require('../../inputs/activitydefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createActivityDefinition,
	updateActivityDefinition,
	removeActivityDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'ActivityDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a ActivityDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(ActivityDefinitionInput),
		description: 'ActivityDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a ActivityDefinition record for deletion.',
	},
};

/**
 * @name exports.ActivityDefinitionCreateMutation
 * @summary ActivityDefinitionCreate mutation.
 */
module.exports.ActivityDefinitionCreateMutation = {
	description: 'Create a ActivityDefinition record',
	resolve: scopeInvariant(scopeOptions, createActivityDefinition),
	type: ActivityDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ActivityDefinitionUpdateMutation
 * @summary ActivityDefinitionUpdate mutation.
 */
module.exports.ActivityDefinitionUpdateMutation = {
	description: 'Update a ActivityDefinition record',
	resolve: scopeInvariant(scopeOptions, updateActivityDefinition),
	type: ActivityDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.ActivityDefinitionRemoveMutation
 * @summary ActivityDefinitionRemove mutation.
 */
module.exports.ActivityDefinitionRemoveMutation = {
	description: 'Remove a ActivityDefinition record',
	resolve: scopeInvariant(scopeOptions, removeActivityDefinition),
	type: ActivityDefinitionSchema,
	args: DeleteArgs,
};
