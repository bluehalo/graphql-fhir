// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicationSchema = require('../../schemas/medication.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicationArgs = require('../../parameters/medication.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, MedicationArgs);

// Resolvers
const {
	getMedication,
	getMedicationList,
	getMedicationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Medication',
	action: 'read',
};

/**
 * @name exports.MedicationQuery
 * @summary Medication query.
 */
module.exports.MedicationQuery = {
	description: 'Query for a single Medication',
	resolve: scopeInvariant(scopeOptions, getMedication),
	type: MedicationSchema,
	args: args,
};

/**
 * @name exports.MedicationListQuery
 * @summary Medication query.
 */
module.exports.MedicationListQuery = {
	description: 'Query for a more than or just one Medication',
	resolve: scopeInvariant(scopeOptions, getMedicationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicationInstanceQuery
 * @summary Medication query.
 */
module.exports.MedicationInstanceQuery = {
	description: 'Access information about a single Medication',
	resolve: scopeInvariant(scopeOptions, getMedicationInstance),
	type: MedicationSchema,
	args: args,
};
