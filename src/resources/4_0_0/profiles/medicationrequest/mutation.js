// Schemas
const MedicationRequestSchema = require('../../schemas/medicationrequest.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicationRequestInput = require('../../inputs/medicationrequest.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicationRequest,
	updateMedicationRequest,
	removeMedicationRequest,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationRequest',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicationRequest record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationRequestInput),
		description: 'MedicationRequest Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicationRequest record for deletion.',
	},
};

/**
 * @name exports.MedicationRequestCreateMutation
 * @summary MedicationRequestCreate mutation.
 */
module.exports.MedicationRequestCreateMutation = {
	description: 'Create a MedicationRequest record',
	resolve: scopeInvariant(scopeOptions, createMedicationRequest),
	type: MedicationRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationRequestUpdateMutation
 * @summary MedicationRequestUpdate mutation.
 */
module.exports.MedicationRequestUpdateMutation = {
	description: 'Update a MedicationRequest record',
	resolve: scopeInvariant(scopeOptions, updateMedicationRequest),
	type: MedicationRequestSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationRequestRemoveMutation
 * @summary MedicationRequestRemove mutation.
 */
module.exports.MedicationRequestRemoveMutation = {
	description: 'Remove a MedicationRequest record',
	resolve: scopeInvariant(scopeOptions, removeMedicationRequest),
	type: MedicationRequestSchema,
	args: DeleteArgs,
};
