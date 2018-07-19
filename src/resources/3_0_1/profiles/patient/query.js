// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const PatientSchema = require('../../schemas/patient.schema');

// Arguments
const PatientArgs = require('../../parameters/patient.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	patientResolver,
	patientListResolver,
	patientInstanceResolver
} = require('./resolver');

/**
 * @name exports.PatientQuery
 * @summary Patient Query.
 */
module.exports.PatientQuery = {
	args: Object.assign({}, CommonArgs, PatientArgs),
	description: 'Query for a single Patient',
	resolve: patientResolver,
	type: PatientSchema
};

/**
 * @name exports.PatientListQuery
 * @summary PatientList Query.
 */
module.exports.PatientListQuery = {
	args: Object.assign({}, CommonArgs, PatientArgs),
	description: 'Query for multiple Patients',
	resolve: patientListResolver,
	type: BundleSchema
};

/**
 * @name exports.PatientInstanceQuery
 * @summary PatientInstance Query.
 */
module.exports.PatientInstanceQuery = {
	description: 'Get information about a single Patient',
	resolve: patientInstanceResolver,
	type: PatientSchema
};
