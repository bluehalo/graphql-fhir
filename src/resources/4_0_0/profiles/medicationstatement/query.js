// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicationStatementSchema = require('../../schemas/medicationstatement.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicationStatementArgs = require('../../parameters/medicationstatement.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicationStatementArgs,
);

// Resolvers
const {
	getMedicationStatement,
	getMedicationStatementList,
	getMedicationStatementInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationStatement',
	action: 'read',
};

/**
 * @name exports.MedicationStatementQuery
 * @summary MedicationStatement query.
 */
module.exports.MedicationStatementQuery = {
	description: 'Query for a single MedicationStatement',
	resolve: scopeInvariant(scopeOptions, getMedicationStatement),
	type: MedicationStatementSchema,
	args: args,
};

/**
 * @name exports.MedicationStatementListQuery
 * @summary MedicationStatement query.
 */
module.exports.MedicationStatementListQuery = {
	description: 'Query for a more than or just one MedicationStatement',
	resolve: scopeInvariant(scopeOptions, getMedicationStatementList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicationStatementInstanceQuery
 * @summary MedicationStatement query.
 */
module.exports.MedicationStatementInstanceQuery = {
	description: 'Access information about a single MedicationStatement',
	resolve: scopeInvariant(scopeOptions, getMedicationStatementInstance),
	type: MedicationStatementSchema,
	args: args,
};
