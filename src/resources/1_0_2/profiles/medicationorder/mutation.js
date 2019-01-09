// Schemas
const MedicationOrderSchema = require('../../schemas/medicationorder.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicationOrderInput = require('../../inputs/medicationorder.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicationOrder,
	updateMedicationOrder,
	removeMedicationOrder,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationOrder',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicationOrder record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationOrderInput),
		description: 'MedicationOrder Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicationOrder record for deletion.',
	},
};

/**
 * @name exports.MedicationOrderCreateMutation
 * @summary MedicationOrderCreate mutation.
 */
module.exports.MedicationOrderCreateMutation = {
	description: 'Create a MedicationOrder record',
	resolve: scopeInvariant(scopeOptions, createMedicationOrder),
	type: MedicationOrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationOrderUpdateMutation
 * @summary MedicationOrderUpdate mutation.
 */
module.exports.MedicationOrderUpdateMutation = {
	description: 'Update a MedicationOrder record',
	resolve: scopeInvariant(scopeOptions, updateMedicationOrder),
	type: MedicationOrderSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationOrderRemoveMutation
 * @summary MedicationOrderRemove mutation.
 */
module.exports.MedicationOrderRemoveMutation = {
	description: 'Remove a MedicationOrder record',
	resolve: scopeInvariant(scopeOptions, removeMedicationOrder),
	type: MedicationOrderSchema,
	args: DeleteArgs,
};
