// Schemas
const MedicationKnowledgeSchema = require('../../schemas/medicationknowledge.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicationKnowledgeInput = require('../../inputs/medicationknowledge.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicationKnowledge,
	updateMedicationKnowledge,
	removeMedicationKnowledge,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationKnowledge',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicationKnowledge record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicationKnowledgeInput),
		description: 'MedicationKnowledge Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicationKnowledge record for deletion.',
	},
};

/**
 * @name exports.MedicationKnowledgeCreateMutation
 * @summary MedicationKnowledgeCreate mutation.
 */
module.exports.MedicationKnowledgeCreateMutation = {
	description: 'Create a MedicationKnowledge record',
	resolve: scopeInvariant(scopeOptions, createMedicationKnowledge),
	type: MedicationKnowledgeSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationKnowledgeUpdateMutation
 * @summary MedicationKnowledgeUpdate mutation.
 */
module.exports.MedicationKnowledgeUpdateMutation = {
	description: 'Update a MedicationKnowledge record',
	resolve: scopeInvariant(scopeOptions, updateMedicationKnowledge),
	type: MedicationKnowledgeSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicationKnowledgeRemoveMutation
 * @summary MedicationKnowledgeRemove mutation.
 */
module.exports.MedicationKnowledgeRemoveMutation = {
	description: 'Remove a MedicationKnowledge record',
	resolve: scopeInvariant(scopeOptions, removeMedicationKnowledge),
	type: MedicationKnowledgeSchema,
	args: DeleteArgs,
};
