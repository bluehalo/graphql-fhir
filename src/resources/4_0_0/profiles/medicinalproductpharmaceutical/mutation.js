// Schemas
const MedicinalProductPharmaceuticalSchema = require('../../schemas/medicinalproductpharmaceutical.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductPharmaceuticalInput = require('../../inputs/medicinalproductpharmaceutical.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProductPharmaceutical,
	updateMedicinalProductPharmaceutical,
	removeMedicinalProductPharmaceutical,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductPharmaceutical',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProductPharmaceutical record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductPharmaceuticalInput),
		description: 'MedicinalProductPharmaceutical Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProductPharmaceutical record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductPharmaceuticalCreateMutation
 * @summary MedicinalProductPharmaceuticalCreate mutation.
 */
module.exports.MedicinalProductPharmaceuticalCreateMutation = {
	description: 'Create a MedicinalProductPharmaceutical record',
	resolve: scopeInvariant(scopeOptions, createMedicinalProductPharmaceutical),
	type: MedicinalProductPharmaceuticalSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductPharmaceuticalUpdateMutation
 * @summary MedicinalProductPharmaceuticalUpdate mutation.
 */
module.exports.MedicinalProductPharmaceuticalUpdateMutation = {
	description: 'Update a MedicinalProductPharmaceutical record',
	resolve: scopeInvariant(scopeOptions, updateMedicinalProductPharmaceutical),
	type: MedicinalProductPharmaceuticalSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductPharmaceuticalRemoveMutation
 * @summary MedicinalProductPharmaceuticalRemove mutation.
 */
module.exports.MedicinalProductPharmaceuticalRemoveMutation = {
	description: 'Remove a MedicinalProductPharmaceutical record',
	resolve: scopeInvariant(scopeOptions, removeMedicinalProductPharmaceutical),
	type: MedicinalProductPharmaceuticalSchema,
	args: DeleteArgs,
};
