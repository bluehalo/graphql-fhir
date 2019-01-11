// Schemas
const MedicationDispenseSchema = require('../../schemas/medicationdispense.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicationDispenseInput = require('../../inputs/medicationdispense.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicationDispense,
	updateMedicationDispense,
	removeMedicationDispense,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationDispense',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicationDispense record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationDispenseInput),
		description: 'MedicationDispense Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicationDispense record for deletion.',
	},
};

/**
 * @name exports.MedicationDispenseCreateMutation
 * @summary MedicationDispenseCreate mutation.
 */
module.exports.MedicationDispenseCreateMutation = {
	description: 'Create a MedicationDispense record',
	resolve: scopeInvariant(scopeOptions, createMedicationDispense),
	type: MedicationDispenseSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationDispenseUpdateMutation
 * @summary MedicationDispenseUpdate mutation.
 */
module.exports.MedicationDispenseUpdateMutation = {
	description: 'Update a MedicationDispense record',
	resolve: scopeInvariant(scopeOptions, updateMedicationDispense),
	type: MedicationDispenseSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationDispenseRemoveMutation
 * @summary MedicationDispenseRemove mutation.
 */
module.exports.MedicationDispenseRemoveMutation = {
	description: 'Remove a MedicationDispense record',
	resolve: scopeInvariant(scopeOptions, removeMedicationDispense),
	type: MedicationDispenseSchema,
	args: DeleteArgs,
};
