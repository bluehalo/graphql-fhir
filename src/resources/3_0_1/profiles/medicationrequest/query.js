// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const MedicationRequestSchema = require('../../schemas/medicationrequest.schema');

// Arguments
const MedicationRequestArgs = require('../../parameters/medicationrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	medicationrequestResolver,
	medicationrequestListResolver,
	medicationrequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.MedicationRequestQuery
 * @summary MedicationRequest Query.
 */
module.exports.MedicationRequestQuery = {
	args: Object.assign({}, CommonArgs, MedicationRequestArgs),
	description: 'Query for a single MedicationRequest',
	resolve: medicationrequestResolver,
	type: MedicationRequestSchema
};

/**
 * @name exports.MedicationRequestListQuery
 * @summary MedicationRequestList Query.
 */
module.exports.MedicationRequestListQuery = {
	args: Object.assign({}, CommonArgs, MedicationRequestArgs),
	description: 'Query for multiple MedicationRequests',
	resolve: medicationrequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.MedicationRequestInstanceQuery
 * @summary MedicationRequestInstance Query.
 */
module.exports.MedicationRequestInstanceQuery = {
	description: 'Get information about a single MedicationRequest',
	resolve: medicationrequestInstanceResolver,
	type: MedicationRequestSchema
};
