// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const MedicationAdministrationSchema = require('../../schemas/medicationadministration.schema');

// Arguments
const MedicationAdministrationArgs = require('../../parameters/medicationadministration.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	medicationadministrationResolver,
	medicationadministrationListResolver,
	medicationadministrationInstanceResolver
} = require('./resolver');

/**
 * @name exports.MedicationAdministrationQuery
 * @summary MedicationAdministration Query.
 */
module.exports.MedicationAdministrationQuery = {
	args: Object.assign({}, CommonArgs, MedicationAdministrationArgs),
	description: 'Query for a single MedicationAdministration',
	resolve: medicationadministrationResolver,
	type: MedicationAdministrationSchema
};

/**
 * @name exports.MedicationAdministrationListQuery
 * @summary MedicationAdministrationList Query.
 */
module.exports.MedicationAdministrationListQuery = {
	args: Object.assign({}, CommonArgs, MedicationAdministrationArgs),
	description: 'Query for multiple MedicationAdministrations',
	resolve: medicationadministrationListResolver,
	type: BundleSchema
};

/**
 * @name exports.MedicationAdministrationInstanceQuery
 * @summary MedicationAdministrationInstance Query.
 */
module.exports.MedicationAdministrationInstanceQuery = {
	description: 'Get information about a single MedicationAdministration',
	resolve: medicationadministrationInstanceResolver,
	type: MedicationAdministrationSchema
};
