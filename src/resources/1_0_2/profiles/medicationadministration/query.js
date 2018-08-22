// Schemas
const MedicationAdministrationSchema = require('../../schemas/medicationadministration.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MedicationAdministrationArgs = require('../../parameters/medicationadministration.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	medicationadministrationResolver,
	medicationadministrationListResolver,
	medicationadministrationInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationAdministration',
	action: 'read',
	version: '1_0_2'
};

/**
 * @name exports.MedicationAdministrationQuery
 * @summary MedicationAdministration Query.
 */
module.exports.MedicationAdministrationQuery = {
	args: Object.assign({}, CommonArgs, MedicationAdministrationArgs),
	description: 'Query for a single MedicationAdministration',
	resolve: scopeInvariant(scopeOptions, medicationadministrationResolver),
	type: MedicationAdministrationSchema
};

/**
 * @name exports.MedicationAdministrationListQuery
 * @summary MedicationAdministrationList Query.
 */
module.exports.MedicationAdministrationListQuery = {
	args: Object.assign({}, CommonArgs, MedicationAdministrationArgs),
	description: 'Query for multiple MedicationAdministrations',
	resolve: scopeInvariant(scopeOptions, medicationadministrationListResolver),
	type: BundleSchema
};

/**
 * @name exports.MedicationAdministrationInstanceQuery
 * @summary MedicationAdministrationInstance Query.
 */
module.exports.MedicationAdministrationInstanceQuery = {
	description: 'Get information about a single MedicationAdministration',
	resolve: scopeInvariant(scopeOptions, medicationadministrationInstanceResolver),
	type: MedicationAdministrationSchema
};
