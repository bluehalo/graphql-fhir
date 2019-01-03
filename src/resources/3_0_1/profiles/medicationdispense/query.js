// Schemas
const MedicationDispenseSchema = require('../../schemas/medicationdispense.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MedicationDispenseArgs = require('../../parameters/medicationdispense.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	medicationdispenseResolver,
	medicationdispenseListResolver,
	medicationdispenseInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationDispense',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.MedicationDispenseQuery
 * @summary MedicationDispense Query.
 */
module.exports.MedicationDispenseQuery = {
	args: Object.assign({}, CommonArgs, MedicationDispenseArgs),
	description: 'Query for a single MedicationDispense',
	resolve: scopeInvariant(scopeOptions, medicationdispenseResolver),
	type: MedicationDispenseSchema,
};

/**
 * @name exports.MedicationDispenseListQuery
 * @summary MedicationDispenseList Query.
 */
module.exports.MedicationDispenseListQuery = {
	args: Object.assign({}, CommonArgs, MedicationDispenseArgs),
	description: 'Query for multiple MedicationDispenses',
	resolve: scopeInvariant(scopeOptions, medicationdispenseListResolver),
	type: BundleSchema,
};

/**
 * @name exports.MedicationDispenseInstanceQuery
 * @summary MedicationDispenseInstance Query.
 */
module.exports.MedicationDispenseInstanceQuery = {
	description: 'Get information about a single MedicationDispense',
	resolve: scopeInvariant(scopeOptions, medicationdispenseInstanceResolver),
	type: MedicationDispenseSchema,
};
