// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicationRequestSchema = require('../../schemas/medicationrequest.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicationRequestArgs = require('../../parameters/medicationrequest.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicationRequestArgs,
);

// Resolvers
const {
	getMedicationRequest,
	getMedicationRequestList,
	getMedicationRequestInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicationRequest',
	action: 'read',
};

/**
 * @name exports.MedicationRequestQuery
 * @summary MedicationRequest query.
 */
module.exports.MedicationRequestQuery = {
	description: 'Query for a single MedicationRequest',
	resolve: scopeInvariant(scopeOptions, getMedicationRequest),
	type: MedicationRequestSchema,
	args: args,
};

/**
 * @name exports.MedicationRequestListQuery
 * @summary MedicationRequest query.
 */
module.exports.MedicationRequestListQuery = {
	description: 'Query for a more than or just one MedicationRequest',
	resolve: scopeInvariant(scopeOptions, getMedicationRequestList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicationRequestInstanceQuery
 * @summary MedicationRequest query.
 */
module.exports.MedicationRequestInstanceQuery = {
	description: 'Access information about a single MedicationRequest',
	resolve: scopeInvariant(scopeOptions, getMedicationRequestInstance),
	type: MedicationRequestSchema,
	args: args,
};
