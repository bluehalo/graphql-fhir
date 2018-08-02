// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const VisionPrescriptionSchema = require('../../schemas/visionprescription.schema');

// Inputs
const VisionPrescriptionInput = require('../../inputs/visionprescription.input');


const {
	visionprescriptionCreateResolver,
	visionprescriptionUpdateResolver,
	visionprescriptionDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a VisionPrescription record.'
	},
	resource: {
		type: VisionPrescriptionInput,
		description: 'VisionPrescription Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a VisionPrescription record for deletion.'
	}
};

/**
 * @name exports.VisionPrescriptionCreateMutation
 * @summary VisionPrescriptionCreate Mutation.
 */
module.exports.VisionPrescriptionCreateMutation = {
	args: WriteArgs,
	description: 'Create a VisionPrescription',
	resolve: visionprescriptionCreateResolver,
	type: VisionPrescriptionSchema
};

/**
 * @name exports.VisionPrescriptionUpdateMutation
 * @summary VisionPrescriptionUpdate Mutation.
 */
module.exports.VisionPrescriptionUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple VisionPrescriptions',
	resolve: visionprescriptionUpdateResolver,
	type: VisionPrescriptionSchema
};

/**
 * @name exports.VisionPrescriptionDeleteMutation
 * @summary VisionPrescriptionDelete Mutation.
 */
module.exports.VisionPrescriptionDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single VisionPrescription',
	resolve: visionprescriptionDeleteResolver,
	type: VisionPrescriptionSchema
};
