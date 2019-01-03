// Schemas
const PatientSchema = require('../../schemas/patient.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PatientArgs = require('../../parameters/patient.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	patientResolver,
	patientListResolver,
	patientInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Patient',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.PatientQuery
 * @summary Patient Query.
 */
module.exports.PatientQuery = {
	args: Object.assign({}, CommonArgs, PatientArgs),
	description: 'Query for a single Patient',
	resolve: scopeInvariant(scopeOptions, patientResolver),
	type: PatientSchema,
};

/**
 * @name exports.PatientListQuery
 * @summary PatientList Query.
 */
module.exports.PatientListQuery = {
	args: Object.assign({}, CommonArgs, PatientArgs),
	description: 'Query for multiple Patients',
	resolve: scopeInvariant(scopeOptions, patientListResolver),
	type: BundleSchema,
};

/**
 * @name exports.PatientInstanceQuery
 * @summary PatientInstance Query.
 */
module.exports.PatientInstanceQuery = {
	description: 'Get information about a single Patient',
	resolve: scopeInvariant(scopeOptions, patientInstanceResolver),
	type: PatientSchema,
};
