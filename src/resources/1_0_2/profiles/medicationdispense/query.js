// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicationDispenseSchema = require('../../schemas/medicationdispense.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicationDispenseArgs = require('../../parameters/medicationdispense.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, MedicationDispenseArgs);

// Resolvers
const {
	getMedicationDispense,
	getMedicationDispenseList,
	getMedicationDispenseInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationDispense',
	action: 'read',
};

/**
 * @name exports.MedicationDispenseQuery
 * @summary MedicationDispense query.
 */
module.exports.MedicationDispenseQuery = {
	description: 'Query for a single MedicationDispense',
	resolve: scopeInvariant(scopeOptions, getMedicationDispense),
	type: MedicationDispenseSchema,
	args: args,
};

/**
 * @name exports.MedicationDispenseListQuery
 * @summary MedicationDispense query.
 */
module.exports.MedicationDispenseListQuery = {
	description: 'Query for a more than or just one MedicationDispense',
	resolve: scopeInvariant(scopeOptions, getMedicationDispenseList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicationDispenseInstanceQuery
 * @summary MedicationDispense query.
 */
module.exports.MedicationDispenseInstanceQuery = {
	description: 'Access information about a single MedicationDispense',
	resolve: scopeInvariant(scopeOptions, getMedicationDispenseInstance),
	type: MedicationDispenseSchema,
	args: args,
};
