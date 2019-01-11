// Schemas
const MedicationSchema = require('../../schemas/medication.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicationInput = require('../../inputs/medication.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedication,
	updateMedication,
	removeMedication,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Medication',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description: 'Unique identifier for creating/updating a Medication record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationInput),
		description: 'Medication Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a Medication record for deletion.',
	},
};

/**
 * @name exports.MedicationCreateMutation
 * @summary MedicationCreate mutation.
 */
module.exports.MedicationCreateMutation = {
	description: 'Create a Medication record',
	resolve: scopeInvariant(scopeOptions, createMedication),
	type: MedicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationUpdateMutation
 * @summary MedicationUpdate mutation.
 */
module.exports.MedicationUpdateMutation = {
	description: 'Update a Medication record',
	resolve: scopeInvariant(scopeOptions, updateMedication),
	type: MedicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationRemoveMutation
 * @summary MedicationRemove mutation.
 */
module.exports.MedicationRemoveMutation = {
	description: 'Remove a Medication record',
	resolve: scopeInvariant(scopeOptions, removeMedication),
	type: MedicationSchema,
	args: DeleteArgs,
};
