// Schemas
const OperationDefinitionSchema = require('../../schemas/operationdefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const OperationDefinitionInput = require('../../inputs/operationdefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createOperationDefinition,
	updateOperationDefinition,
	removeOperationDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'OperationDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a OperationDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(OperationDefinitionInput),
		description: 'OperationDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a OperationDefinition record for deletion.',
	},
};

/**
 * @name exports.OperationDefinitionCreateMutation
 * @summary OperationDefinitionCreate mutation.
 */
module.exports.OperationDefinitionCreateMutation = {
	description: 'Create a OperationDefinition record',
	resolve: scopeInvariant(scopeOptions, createOperationDefinition),
	type: OperationDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.OperationDefinitionUpdateMutation
 * @summary OperationDefinitionUpdate mutation.
 */
module.exports.OperationDefinitionUpdateMutation = {
	description: 'Update a OperationDefinition record',
	resolve: scopeInvariant(scopeOptions, updateOperationDefinition),
	type: OperationDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.OperationDefinitionRemoveMutation
 * @summary OperationDefinitionRemove mutation.
 */
module.exports.OperationDefinitionRemoveMutation = {
	description: 'Remove a OperationDefinition record',
	resolve: scopeInvariant(scopeOptions, removeOperationDefinition),
	type: OperationDefinitionSchema,
	args: DeleteArgs,
};
