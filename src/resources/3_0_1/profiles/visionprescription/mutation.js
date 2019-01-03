// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const VisionPrescriptionSchema = require('../../schemas/visionprescription.schema');

// Inputs
const VisionPrescriptionInput = require('../../inputs/visionprescription.input');

// Resolvers
const {
	visionprescriptionCreateResolver,
	visionprescriptionUpdateResolver,
	visionprescriptionDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'VisionPrescription',
	action: 'write',
	version: '3_0_1',
};

let WriteArgs = {
	id: {
		type: IdScalar,
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
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a VisionPrescription record for deletion.',
	},
};

/**
 * @name exports.VisionPrescriptionCreateMutation
 * @summary VisionPrescriptionCreate Mutation.
 */
module.exports.VisionPrescriptionCreateMutation = {
	args: WriteArgs,
	description: 'Create a VisionPrescription',
	resolve: scopeInvariant(scopeOptions, visionprescriptionCreateResolver),
	type: VisionPrescriptionSchema,
};

/**
 * @name exports.VisionPrescriptionUpdateMutation
 * @summary VisionPrescriptionUpdate Mutation.
 */
module.exports.VisionPrescriptionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple VisionPrescriptions',
	resolve: scopeInvariant(scopeOptions, visionprescriptionUpdateResolver),
	type: VisionPrescriptionSchema,
};

/**
 * @name exports.VisionPrescriptionDeleteMutation
 * @summary VisionPrescriptionDelete Mutation.
 */
module.exports.VisionPrescriptionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single VisionPrescription',
	resolve: scopeInvariant(scopeOptions, visionprescriptionDeleteResolver),
	type: VisionPrescriptionSchema,
};
