// Schemas
const MedicinalProductContraindicationSchema = require('../../schemas/medicinalproductcontraindication.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductContraindicationInput = require('../../inputs/medicinalproductcontraindication.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProductContraindication,
	updateMedicinalProductContraindication,
	removeMedicinalProductContraindication,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductContraindication',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProductContraindication record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductContraindicationInput),
		description: 'MedicinalProductContraindication Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProductContraindication record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductContraindicationCreateMutation
 * @summary MedicinalProductContraindicationCreate mutation.
 */
module.exports.MedicinalProductContraindicationCreateMutation = {
	description: 'Create a MedicinalProductContraindication record',
	resolve: scopeInvariant(scopeOptions, createMedicinalProductContraindication),
	type: MedicinalProductContraindicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductContraindicationUpdateMutation
 * @summary MedicinalProductContraindicationUpdate mutation.
 */
module.exports.MedicinalProductContraindicationUpdateMutation = {
	description: 'Update a MedicinalProductContraindication record',
	resolve: scopeInvariant(scopeOptions, updateMedicinalProductContraindication),
	type: MedicinalProductContraindicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductContraindicationRemoveMutation
 * @summary MedicinalProductContraindicationRemove mutation.
 */
module.exports.MedicinalProductContraindicationRemoveMutation = {
	description: 'Remove a MedicinalProductContraindication record',
	resolve: scopeInvariant(scopeOptions, removeMedicinalProductContraindication),
	type: MedicinalProductContraindicationSchema,
	args: DeleteArgs,
};
