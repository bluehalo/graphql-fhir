// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicationAdministrationSchema = require('../../schemas/medicationadministration.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicationAdministrationArgs = require('../../parameters/medicationadministration.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, MedicationAdministrationArgs);

// Resolvers
const {
	getMedicationAdministration,
	getMedicationAdministrationList,
	getMedicationAdministrationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationAdministration',
	action: 'read',
};

/**
 * @name exports.MedicationAdministrationQuery
 * @summary MedicationAdministration query.
 */
module.exports.MedicationAdministrationQuery = {
	description: 'Query for a single MedicationAdministration',
	resolve: scopeInvariant(scopeOptions, getMedicationAdministration),
	type: MedicationAdministrationSchema,
	args: args,
};

/**
 * @name exports.MedicationAdministrationListQuery
 * @summary MedicationAdministration query.
 */
module.exports.MedicationAdministrationListQuery = {
	description: 'Query for a more than or just one MedicationAdministration',
	resolve: scopeInvariant(scopeOptions, getMedicationAdministrationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicationAdministrationInstanceQuery
 * @summary MedicationAdministration query.
 */
module.exports.MedicationAdministrationInstanceQuery = {
	description: 'Access information about a single MedicationAdministration',
	resolve: scopeInvariant(scopeOptions, getMedicationAdministrationInstance),
	type: MedicationAdministrationSchema,
	args: args,
};
