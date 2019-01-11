// Schemas
const MedicinalProductInteractionSchema = require('../../schemas/medicinalproductinteraction.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductInteractionInput = require('../../inputs/medicinalproductinteraction.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProductInteraction,
	updateMedicinalProductInteraction,
	removeMedicinalProductInteraction,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductInteraction',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProductInteraction record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductInteractionInput),
		description: 'MedicinalProductInteraction Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProductInteraction record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductInteractionCreateMutation
 * @summary MedicinalProductInteractionCreate mutation.
 */
module.exports.MedicinalProductInteractionCreateMutation = {
	description: 'Create a MedicinalProductInteraction record',
	resolve: scopeInvariant(scopeOptions, createMedicinalProductInteraction),
	type: MedicinalProductInteractionSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductInteractionUpdateMutation
 * @summary MedicinalProductInteractionUpdate mutation.
 */
module.exports.MedicinalProductInteractionUpdateMutation = {
	description: 'Update a MedicinalProductInteraction record',
	resolve: scopeInvariant(scopeOptions, updateMedicinalProductInteraction),
	type: MedicinalProductInteractionSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductInteractionRemoveMutation
 * @summary MedicinalProductInteractionRemove mutation.
 */
module.exports.MedicinalProductInteractionRemoveMutation = {
	description: 'Remove a MedicinalProductInteraction record',
	resolve: scopeInvariant(scopeOptions, removeMedicinalProductInteraction),
	type: MedicinalProductInteractionSchema,
	args: DeleteArgs,
};
