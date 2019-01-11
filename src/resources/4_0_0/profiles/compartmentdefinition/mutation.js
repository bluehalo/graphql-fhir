// Schemas
const CompartmentDefinitionSchema = require('../../schemas/compartmentdefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const CompartmentDefinitionInput = require('../../inputs/compartmentdefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createCompartmentDefinition,
	updateCompartmentDefinition,
	removeCompartmentDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CompartmentDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a CompartmentDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(CompartmentDefinitionInput),
		description: 'CompartmentDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a CompartmentDefinition record for deletion.',
	},
};

/**
 * @name exports.CompartmentDefinitionCreateMutation
 * @summary CompartmentDefinitionCreate mutation.
 */
module.exports.CompartmentDefinitionCreateMutation = {
	description: 'Create a CompartmentDefinition record',
	resolve: scopeInvariant(scopeOptions, createCompartmentDefinition),
	type: CompartmentDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.CompartmentDefinitionUpdateMutation
 * @summary CompartmentDefinitionUpdate mutation.
 */
module.exports.CompartmentDefinitionUpdateMutation = {
	description: 'Update a CompartmentDefinition record',
	resolve: scopeInvariant(scopeOptions, updateCompartmentDefinition),
	type: CompartmentDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.CompartmentDefinitionRemoveMutation
 * @summary CompartmentDefinitionRemove mutation.
 */
module.exports.CompartmentDefinitionRemoveMutation = {
	description: 'Remove a CompartmentDefinition record',
	resolve: scopeInvariant(scopeOptions, removeCompartmentDefinition),
	type: CompartmentDefinitionSchema,
	args: DeleteArgs,
};
