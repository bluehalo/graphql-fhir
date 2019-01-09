// Schemas
const VisionPrescriptionSchema = require('../../schemas/visionprescription.schema.js');
const OperationOutcome = require('../../inputs/operationoutcome.input.js');

// Inputs
const VisionPrescriptionInput = require('../../inputs/visionprescription.input.js');

// Scalars
const idScalar = require('../../scalars/id.scalar.js');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Resolvers
const {
	createVisionPrescription,
	updateVisionPrescription,
	removeVisionPrescription,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'VisionPrescription',
	action: 'write',
};

let WriteArgs = {
	id: {
		type: idScalar,
		description:
			'Unique identifier for creating/updating a VisionPrescription record.',
	},
	resource: {
		type: new GraphQLNonNull(VisionPrescriptionInput),
		description: 'VisionPrescription Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(idScalar),
		description:
			'Unique identifier for selecting a VisionPrescription record for deletion.',
	},
};

/**
 * @name exports.VisionPrescriptionCreateMutation
 * @summary VisionPrescriptionCreate mutation.
 */
module.exports.VisionPrescriptionCreateMutation = {
	description: 'Create a VisionPrescription record',
	resolve: scopeInvariant(scopeOptions, createVisionPrescription),
	type: VisionPrescriptionSchema,
	args: WriteArgs,
};

/**
 * @name exports.VisionPrescriptionUpdateMutation
 * @summary VisionPrescriptionUpdate mutation.
 */
module.exports.VisionPrescriptionUpdateMutation = {
	description: 'Update a VisionPrescription record',
	resolve: scopeInvariant(scopeOptions, updateVisionPrescription),
	type: VisionPrescriptionSchema,
	args: WriteArgs,
};

/**
 * @name exports.VisionPrescriptionRemoveMutation
 * @summary VisionPrescriptionRemove mutation.
 */
module.exports.VisionPrescriptionRemoveMutation = {
	description: 'Remove a VisionPrescription record',
	resolve: scopeInvariant(scopeOptions, removeVisionPrescription),
	type: VisionPrescriptionSchema,
	args: DeleteArgs,
};
