// Schemas
const MedicinalProductIndicationSchema = require('../../schemas/medicinalproductindication.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductIndicationInput = require('../../inputs/medicinalproductindication.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProductIndication,
	updateMedicinalProductIndication,
	removeMedicinalProductIndication,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductIndication',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProductIndication record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductIndicationInput),
		description: 'MedicinalProductIndication Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProductIndication record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductIndicationCreateMutation
 * @summary MedicinalProductIndicationCreate mutation.
 */
module.exports.MedicinalProductIndicationCreateMutation = {
	description: 'Create a MedicinalProductIndication record',
	resolve: scopeInvariant(scopeOptions, createMedicinalProductIndication),
	type: MedicinalProductIndicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductIndicationUpdateMutation
 * @summary MedicinalProductIndicationUpdate mutation.
 */
module.exports.MedicinalProductIndicationUpdateMutation = {
	description: 'Update a MedicinalProductIndication record',
	resolve: scopeInvariant(scopeOptions, updateMedicinalProductIndication),
	type: MedicinalProductIndicationSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductIndicationRemoveMutation
 * @summary MedicinalProductIndicationRemove mutation.
 */
module.exports.MedicinalProductIndicationRemoveMutation = {
	description: 'Remove a MedicinalProductIndication record',
	resolve: scopeInvariant(scopeOptions, removeMedicinalProductIndication),
	type: MedicinalProductIndicationSchema,
	args: DeleteArgs,
};
