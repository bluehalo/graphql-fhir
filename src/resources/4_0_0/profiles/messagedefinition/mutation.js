// Schemas
const MessageDefinitionSchema = require('../../schemas/messagedefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MessageDefinitionInput = require('../../inputs/messagedefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMessageDefinition,
	updateMessageDefinition,
	removeMessageDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MessageDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MessageDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(MessageDefinitionInput),
		description: 'MessageDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MessageDefinition record for deletion.',
	},
};

/**
 * @name exports.MessageDefinitionCreateMutation
 * @summary MessageDefinitionCreate mutation.
 */
module.exports.MessageDefinitionCreateMutation = {
	description: 'Create a MessageDefinition record',
	resolve: scopeInvariant(scopeOptions, createMessageDefinition),
	type: MessageDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.MessageDefinitionUpdateMutation
 * @summary MessageDefinitionUpdate mutation.
 */
module.exports.MessageDefinitionUpdateMutation = {
	description: 'Update a MessageDefinition record',
	resolve: scopeInvariant(scopeOptions, updateMessageDefinition),
	type: MessageDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.MessageDefinitionRemoveMutation
 * @summary MessageDefinitionRemove mutation.
 */
module.exports.MessageDefinitionRemoveMutation = {
	description: 'Remove a MessageDefinition record',
	resolve: scopeInvariant(scopeOptions, removeMessageDefinition),
	type: MessageDefinitionSchema,
	args: DeleteArgs,
};
