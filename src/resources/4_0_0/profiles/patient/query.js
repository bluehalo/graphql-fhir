// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const PatientSchema = require('../../schemas/patient.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const PatientArgs = require('../../parameters/patient.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, PatientArgs);

// Resolvers
const {
	getPatient,
	getPatientList,
	getPatientInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Patient',
	action: 'read',
};

/**
 * @name exports.PatientQuery
 * @summary Patient query.
 */
module.exports.PatientQuery = {
	description: 'Query for a single Patient',
	resolve: scopeInvariant(scopeOptions, getPatient),
	type: PatientSchema,
	args: args,
};

/**
 * @name exports.PatientListQuery
 * @summary Patient query.
 */
module.exports.PatientListQuery = {
	description: 'Query for a more than or just one Patient',
	resolve: scopeInvariant(scopeOptions, getPatientList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.PatientInstanceQuery
 * @summary Patient query.
 */
module.exports.PatientInstanceQuery = {
	description: 'Access information about a single Patient',
	resolve: scopeInvariant(scopeOptions, getPatientInstance),
	type: PatientSchema,
	args: args,
};
