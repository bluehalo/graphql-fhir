// Schemas
const SpecimenDefinitionSchema = require('../../schemas/specimendefinition.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const SpecimenDefinitionInput = require('../../inputs/specimendefinition.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createSpecimenDefinition,
	updateSpecimenDefinition,
	removeSpecimenDefinition,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'SpecimenDefinition',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a SpecimenDefinition record.',
	},
	resource: {
		type: new GraphQLNonNull(SpecimenDefinitionInput),
		description: 'SpecimenDefinition Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a SpecimenDefinition record for deletion.',
	},
};

/**
 * @name exports.SpecimenDefinitionCreateMutation
 * @summary SpecimenDefinitionCreate mutation.
 */
module.exports.SpecimenDefinitionCreateMutation = {
	description: 'Create a SpecimenDefinition record',
	resolve: scopeInvariant(scopeOptions, createSpecimenDefinition),
	type: SpecimenDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.SpecimenDefinitionUpdateMutation
 * @summary SpecimenDefinitionUpdate mutation.
 */
module.exports.SpecimenDefinitionUpdateMutation = {
	description: 'Update a SpecimenDefinition record',
	resolve: scopeInvariant(scopeOptions, updateSpecimenDefinition),
	type: SpecimenDefinitionSchema,
	args: WriteArgs,
};

/**
 * @name exports.SpecimenDefinitionRemoveMutation
 * @summary SpecimenDefinitionRemove mutation.
 */
module.exports.SpecimenDefinitionRemoveMutation = {
	description: 'Remove a SpecimenDefinition record',
	resolve: scopeInvariant(scopeOptions, removeSpecimenDefinition),
	type: SpecimenDefinitionSchema,
	args: DeleteArgs,
};
