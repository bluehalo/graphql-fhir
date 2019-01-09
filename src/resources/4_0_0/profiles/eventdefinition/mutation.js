// Schemas
const EventDefinitionSchema = require('../../schemas/eventdefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const EventDefinitionInput = require('../../inputs/eventdefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createEventDefinition,
	updateEventDefinition,
	removeEventDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'EventDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a EventDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(EventDefinitionInput),
		description: 'EventDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a EventDefinition record for deletion.',
	},
};

/**
 * @name exports.EventDefinitionCreateMutation
 * @summary EventDefinitionCreate mutation.
 */
module.exports.EventDefinitionCreateMutation = {
	description: 'Create a EventDefinition record',
	resolve: scopeInvariant(scopeOptions, createEventDefinition),
	type: EventDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.EventDefinitionUpdateMutation
 * @summary EventDefinitionUpdate mutation.
 */
module.exports.EventDefinitionUpdateMutation = {
	description: 'Update a EventDefinition record',
	resolve: scopeInvariant(scopeOptions, updateEventDefinition),
	type: EventDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.EventDefinitionRemoveMutation
 * @summary EventDefinitionRemove mutation.
 */
module.exports.EventDefinitionRemoveMutation = {
	description: 'Remove a EventDefinition record',
	resolve: scopeInvariant(scopeOptions, removeEventDefinition),
	type: EventDefinitionSchema,
	args: DeleteArgs,
};
