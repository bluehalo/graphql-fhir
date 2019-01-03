// Schemas
const MedicationStatementSchema = require('../../schemas/medicationstatement.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MedicationStatementArgs = require('../../parameters/medicationstatement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	medicationstatementResolver,
	medicationstatementListResolver,
	medicationstatementInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationStatement',
	action: 'read',
	version: '1_0_2',
};

/**
 * @name exports.MedicationStatementQuery
 * @summary MedicationStatement Query.
 */
module.exports.MedicationStatementQuery = {
	args: Object.assign({}, CommonArgs, MedicationStatementArgs),
	description: 'Query for a single MedicationStatement',
	resolve: scopeInvariant(scopeOptions, medicationstatementResolver),
	type: MedicationStatementSchema,
};

/**
 * @name exports.MedicationStatementListQuery
 * @summary MedicationStatementList Query.
 */
module.exports.MedicationStatementListQuery = {
	args: Object.assign({}, CommonArgs, MedicationStatementArgs),
	description: 'Query for multiple MedicationStatements',
	resolve: scopeInvariant(scopeOptions, medicationstatementListResolver),
	type: BundleSchema,
};

/**
 * @name exports.MedicationStatementInstanceQuery
 * @summary MedicationStatementInstance Query.
 */
module.exports.MedicationStatementInstanceQuery = {
	description: 'Get information about a single MedicationStatement',
	resolve: scopeInvariant(scopeOptions, medicationstatementInstanceResolver),
	type: MedicationStatementSchema,
};
