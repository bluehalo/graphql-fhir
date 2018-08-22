// Schemas
const MedicationRequestSchema = require('../../schemas/medicationrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MedicationRequestArgs = require('../../parameters/medicationrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	medicationrequestResolver,
	medicationrequestListResolver,
	medicationrequestInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationRequest',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.MedicationRequestQuery
 * @summary MedicationRequest Query.
 */
module.exports.MedicationRequestQuery = {
	args: Object.assign({}, CommonArgs, MedicationRequestArgs),
	description: 'Query for a single MedicationRequest',
	resolve: scopeInvariant(scopeOptions, medicationrequestResolver),
	type: MedicationRequestSchema
};

/**
 * @name exports.MedicationRequestListQuery
 * @summary MedicationRequestList Query.
 */
module.exports.MedicationRequestListQuery = {
	args: Object.assign({}, CommonArgs, MedicationRequestArgs),
	description: 'Query for multiple MedicationRequests',
	resolve: scopeInvariant(scopeOptions, medicationrequestListResolver),
	type: BundleSchema
};

/**
 * @name exports.MedicationRequestInstanceQuery
 * @summary MedicationRequestInstance Query.
 */
module.exports.MedicationRequestInstanceQuery = {
	description: 'Get information about a single MedicationRequest',
	resolve: scopeInvariant(scopeOptions, medicationrequestInstanceResolver),
	type: MedicationRequestSchema
};
