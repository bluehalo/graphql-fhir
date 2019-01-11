// Schemas
const MedicationStatementSchema = require('../../schemas/medicationstatement.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicationStatementInput = require('../../inputs/medicationstatement.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicationStatement,
	updateMedicationStatement,
	removeMedicationStatement,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationStatement',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicationStatement record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationStatementInput),
		description: 'MedicationStatement Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicationStatement record for deletion.',
	},
};

/**
 * @name exports.MedicationStatementCreateMutation
 * @summary MedicationStatementCreate mutation.
 */
module.exports.MedicationStatementCreateMutation = {
	description: 'Create a MedicationStatement record',
	resolve: scopeInvariant(scopeOptions, createMedicationStatement),
	type: MedicationStatementSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationStatementUpdateMutation
 * @summary MedicationStatementUpdate mutation.
 */
module.exports.MedicationStatementUpdateMutation = {
	description: 'Update a MedicationStatement record',
	resolve: scopeInvariant(scopeOptions, updateMedicationStatement),
	type: MedicationStatementSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationStatementRemoveMutation
 * @summary MedicationStatementRemove mutation.
 */
module.exports.MedicationStatementRemoveMutation = {
	description: 'Remove a MedicationStatement record',
	resolve: scopeInvariant(scopeOptions, removeMedicationStatement),
	type: MedicationStatementSchema,
	args: DeleteArgs,
};
