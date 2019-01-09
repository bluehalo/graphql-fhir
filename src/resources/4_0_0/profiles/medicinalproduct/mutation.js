// Schemas
const MedicinalProductSchema = require('../../schemas/medicinalproduct.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductInput = require('../../inputs/medicinalproduct.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProduct,
	updateMedicinalProduct,
	removeMedicinalProduct,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProduct',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProduct record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductInput),
		description: 'MedicinalProduct Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProduct record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductCreateMutation
 * @summary MedicinalProductCreate mutation.
 */
module.exports.MedicinalProductCreateMutation = {
	description: 'Create a MedicinalProduct record',
	resolve: scopeInvariant(scopeOptions, createMedicinalProduct),
	type: MedicinalProductSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductUpdateMutation
 * @summary MedicinalProductUpdate mutation.
 */
module.exports.MedicinalProductUpdateMutation = {
	description: 'Update a MedicinalProduct record',
	resolve: scopeInvariant(scopeOptions, updateMedicinalProduct),
	type: MedicinalProductSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductRemoveMutation
 * @summary MedicinalProductRemove mutation.
 */
module.exports.MedicinalProductRemoveMutation = {
	description: 'Remove a MedicinalProduct record',
	resolve: scopeInvariant(scopeOptions, removeMedicinalProduct),
	type: MedicinalProductSchema,
	args: DeleteArgs,
};
