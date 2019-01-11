// Schemas
const MedicinalProductPackagedSchema = require('../../schemas/medicinalproductpackaged.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductPackagedInput = require('../../inputs/medicinalproductpackaged.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProductPackaged,
	updateMedicinalProductPackaged,
	removeMedicinalProductPackaged,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductPackaged',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProductPackaged record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductPackagedInput),
		description: 'MedicinalProductPackaged Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProductPackaged record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductPackagedCreateMutation
 * @summary MedicinalProductPackagedCreate mutation.
 */
module.exports.MedicinalProductPackagedCreateMutation = {
	description: 'Create a MedicinalProductPackaged record',
	resolve: scopeInvariant(scopeOptions, createMedicinalProductPackaged),
	type: MedicinalProductPackagedSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductPackagedUpdateMutation
 * @summary MedicinalProductPackagedUpdate mutation.
 */
module.exports.MedicinalProductPackagedUpdateMutation = {
	description: 'Update a MedicinalProductPackaged record',
	resolve: scopeInvariant(scopeOptions, updateMedicinalProductPackaged),
	type: MedicinalProductPackagedSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductPackagedRemoveMutation
 * @summary MedicinalProductPackagedRemove mutation.
 */
module.exports.MedicinalProductPackagedRemoveMutation = {
	description: 'Remove a MedicinalProductPackaged record',
	resolve: scopeInvariant(scopeOptions, removeMedicinalProductPackaged),
	type: MedicinalProductPackagedSchema,
	args: DeleteArgs,
};
