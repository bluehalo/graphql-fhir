// Schemas
const StructureDefinitionSchema = require('../../schemas/structuredefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const StructureDefinitionInput = require('../../inputs/structuredefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createStructureDefinition,
	updateStructureDefinition,
	removeStructureDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'StructureDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a StructureDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(StructureDefinitionInput),
		description: 'StructureDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a StructureDefinition record for deletion.',
	},
};

/**
 * @name exports.StructureDefinitionCreateMutation
 * @summary StructureDefinitionCreate mutation.
 */
module.exports.StructureDefinitionCreateMutation = {
	description: 'Create a StructureDefinition record',
	resolve: scopeInvariant(scopeOptions, createStructureDefinition),
	type: StructureDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.StructureDefinitionUpdateMutation
 * @summary StructureDefinitionUpdate mutation.
 */
module.exports.StructureDefinitionUpdateMutation = {
	description: 'Update a StructureDefinition record',
	resolve: scopeInvariant(scopeOptions, updateStructureDefinition),
	type: StructureDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.StructureDefinitionRemoveMutation
 * @summary StructureDefinitionRemove mutation.
 */
module.exports.StructureDefinitionRemoveMutation = {
	description: 'Remove a StructureDefinition record',
	resolve: scopeInvariant(scopeOptions, removeStructureDefinition),
	type: StructureDefinitionSchema,
	args: DeleteArgs,
};
