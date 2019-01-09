// Schemas
const MedicinalProductUndesirableEffectSchema = require('../../schemas/medicinalproductundesirableeffect.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const MedicinalProductUndesirableEffectInput = require('../../inputs/medicinalproductundesirableeffect.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createMedicinalProductUndesirableEffect,
	updateMedicinalProductUndesirableEffect,
	removeMedicinalProductUndesirableEffect,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductUndesirableEffect',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a MedicinalProductUndesirableEffect record.',
	},
	resource: {
		type: new GraphQLNonNull(MedicinalProductUndesirableEffectInput),
		description:
			'MedicinalProductUndesirableEffect Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a MedicinalProductUndesirableEffect record for deletion.',
	},
};

/**
 * @name exports.MedicinalProductUndesirableEffectCreateMutation
 * @summary MedicinalProductUndesirableEffectCreate mutation.
 */
module.exports.MedicinalProductUndesirableEffectCreateMutation = {
	description: 'Create a MedicinalProductUndesirableEffect record',
	resolve: scopeInvariant(
		scopeOptions,
		createMedicinalProductUndesirableEffect,
	),
	type: MedicinalProductUndesirableEffectSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductUndesirableEffectUpdateMutation
 * @summary MedicinalProductUndesirableEffectUpdate mutation.
 */
module.exports.MedicinalProductUndesirableEffectUpdateMutation = {
	description: 'Update a MedicinalProductUndesirableEffect record',
	resolve: scopeInvariant(
		scopeOptions,
		updateMedicinalProductUndesirableEffect,
	),
	type: MedicinalProductUndesirableEffectSchema,
	args: WriteArgs,
};

/**
 * @name exports.MedicinalProductUndesirableEffectRemoveMutation
 * @summary MedicinalProductUndesirableEffectRemove mutation.
 */
module.exports.MedicinalProductUndesirableEffectRemoveMutation = {
	description: 'Remove a MedicinalProductUndesirableEffect record',
	resolve: scopeInvariant(
		scopeOptions,
		removeMedicinalProductUndesirableEffect,
	),
	type: MedicinalProductUndesirableEffectSchema,
	args: DeleteArgs,
};
