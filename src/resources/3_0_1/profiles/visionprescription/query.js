// Schemas
const VisionPrescriptionSchema = require('../../schemas/visionprescription.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const VisionPrescriptionArgs = require('../../parameters/visionprescription.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	visionprescriptionResolver,
	visionprescriptionListResolver,
	visionprescriptionInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'VisionPrescription',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.VisionPrescriptionQuery
 * @summary VisionPrescription Query.
 */
module.exports.VisionPrescriptionQuery = {
	args: Object.assign({}, CommonArgs, VisionPrescriptionArgs),
	description: 'Query for a single VisionPrescription',
	resolve: scopeInvariant(scopeOptions, visionprescriptionResolver),
	type: VisionPrescriptionSchema,
};

/**
 * @name exports.VisionPrescriptionListQuery
 * @summary VisionPrescriptionList Query.
 */
module.exports.VisionPrescriptionListQuery = {
	args: Object.assign({}, CommonArgs, VisionPrescriptionArgs),
	description: 'Query for multiple VisionPrescriptions',
	resolve: scopeInvariant(scopeOptions, visionprescriptionListResolver),
	type: BundleSchema,
};

/**
 * @name exports.VisionPrescriptionInstanceQuery
 * @summary VisionPrescriptionInstance Query.
 */
module.exports.VisionPrescriptionInstanceQuery = {
	description: 'Get information about a single VisionPrescription',
	resolve: scopeInvariant(scopeOptions, visionprescriptionInstanceResolver),
	type: VisionPrescriptionSchema,
};
