// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const VisionPrescriptionSchema = require('../../schemas/visionprescription.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const VisionPrescriptionArgs = require('../../parameters/visionprescription.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	VisionPrescriptionArgs,
);

// Resolvers
const {
	getVisionPrescription,
	getVisionPrescriptionList,
	getVisionPrescriptionInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'VisionPrescription',
	action: 'read',
};

/**
 * @name exports.VisionPrescriptionQuery
 * @summary VisionPrescription query.
 */
module.exports.VisionPrescriptionQuery = {
	description: 'Query for a single VisionPrescription',
	resolve: scopeInvariant(scopeOptions, getVisionPrescription),
	type: VisionPrescriptionSchema,
	args: args,
};

/**
 * @name exports.VisionPrescriptionListQuery
 * @summary VisionPrescription query.
 */
module.exports.VisionPrescriptionListQuery = {
	description: 'Query for a more than or just one VisionPrescription',
	resolve: scopeInvariant(scopeOptions, getVisionPrescriptionList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.VisionPrescriptionInstanceQuery
 * @summary VisionPrescription query.
 */
module.exports.VisionPrescriptionInstanceQuery = {
	description: 'Access information about a single VisionPrescription',
	resolve: scopeInvariant(scopeOptions, getVisionPrescriptionInstance),
	type: VisionPrescriptionSchema,
	args: args,
};
