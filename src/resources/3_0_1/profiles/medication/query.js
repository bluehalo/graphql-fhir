// Schemas
const MedicationSchema = require('../../schemas/medication.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MedicationArgs = require('../../parameters/medication.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	medicationResolver,
	medicationListResolver,
	medicationInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Medication',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.MedicationQuery
 * @summary Medication Query.
 */
module.exports.MedicationQuery = {
	args: Object.assign({}, CommonArgs, MedicationArgs),
	description: 'Query for a single Medication',
	resolve: scopeInvariant(scopeOptions, medicationResolver),
	type: MedicationSchema
};

/**
 * @name exports.MedicationListQuery
 * @summary MedicationList Query.
 */
module.exports.MedicationListQuery = {
	args: Object.assign({}, CommonArgs, MedicationArgs),
	description: 'Query for multiple Medications',
	resolve: scopeInvariant(scopeOptions, medicationListResolver),
	type: BundleSchema
};

/**
 * @name exports.MedicationInstanceQuery
 * @summary MedicationInstance Query.
 */
module.exports.MedicationInstanceQuery = {
	description: 'Get information about a single Medication',
	resolve: scopeInvariant(scopeOptions, medicationInstanceResolver),
	type: MedicationSchema
};
