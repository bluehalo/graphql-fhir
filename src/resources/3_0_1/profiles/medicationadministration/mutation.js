// Schemas
const MedicationAdministrationSchema = require('../../schemas/medicationadministration.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicationAdministrationInput = require('../../inputs/medicationadministration.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicationAdministration,
	updateMedicationAdministration,
	removeMedicationAdministration,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationAdministration',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicationAdministration record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationAdministrationInput),
		description: 'MedicationAdministration Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicationAdministration record for deletion.',
	},
};

/**
 * @name exports.MedicationAdministrationCreateMutation
 * @summary MedicationAdministrationCreate mutation.
 */
module.exports.MedicationAdministrationCreateMutation = {
	description: 'Create a MedicationAdministration record',
	resolve: scopeInvariant(scopeOptions, createMedicationAdministration),
	type: MedicationAdministrationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationAdministrationUpdateMutation
 * @summary MedicationAdministrationUpdate mutation.
 */
module.exports.MedicationAdministrationUpdateMutation = {
	description: 'Update a MedicationAdministration record',
	resolve: scopeInvariant(scopeOptions, updateMedicationAdministration),
	type: MedicationAdministrationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationAdministrationRemoveMutation
 * @summary MedicationAdministrationRemove mutation.
 */
module.exports.MedicationAdministrationRemoveMutation = {
	description: 'Remove a MedicationAdministration record',
	resolve: scopeInvariant(scopeOptions, removeMedicationAdministration),
	type: MedicationAdministrationSchema,
	args: DeleteArgs,
};
