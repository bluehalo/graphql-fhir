// Schemas
const VisionPrescriptionSchema = require('../../schemas/visionprescription.schema');

// Arguments
const VisionPrescriptionArgs = require('../../parameters/visionprescription.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	visionprescriptionResolver,
	visionprescriptionListResolver,
	visionprescriptionInstanceResolver
} = require('./resolver');

/**
 * @name exports.VisionPrescriptionQuery
 * @summary VisionPrescription Query.
 */
module.exports.VisionPrescriptionQuery = {
	args: Object.assign({}, CommonArgs, VisionPrescriptionArgs),
	description: 'Query for a single VisionPrescription',
	resolve: visionprescriptionResolver,
	type: VisionPrescriptionSchema
};

/**
 * @name exports.VisionPrescriptionListQuery
 * @summary VisionPrescriptionList Query.
 */
module.exports.VisionPrescriptionListQuery = {
	args: Object.assign({}, CommonArgs, VisionPrescriptionArgs),
	description: 'Query for multiple VisionPrescriptions',
	resolve: visionprescriptionListResolver,
	type: new GraphQLList(VisionPrescriptionSchema)
};

/**
 * @name exports.VisionPrescriptionInstanceQuery
 * @summary VisionPrescriptionInstance Query.
 */
module.exports.VisionPrescriptionInstanceQuery = {
	description: 'Get information about a single VisionPrescription',
	resolve: visionprescriptionInstanceResolver,
	type: VisionPrescriptionSchema
};
