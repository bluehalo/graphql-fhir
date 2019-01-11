// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DiagnosticReportSchema = require('../../schemas/diagnosticreport.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DiagnosticReportArgs = require('../../parameters/diagnosticreport.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	DiagnosticReportArgs,
);

// Resolvers
const {
	getDiagnosticReport,
	getDiagnosticReportList,
	getDiagnosticReportInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DiagnosticReport',
	action: 'read',
};

/**
 * @name exports.DiagnosticReportQuery
 * @summary DiagnosticReport query.
 */
module.exports.DiagnosticReportQuery = {
	description: 'Query for a single DiagnosticReport',
	resolve: scopeInvariant(scopeOptions, getDiagnosticReport),
	type: DiagnosticReportSchema,
	args: args,
};

/**
 * @name exports.DiagnosticReportListQuery
 * @summary DiagnosticReport query.
 */
module.exports.DiagnosticReportListQuery = {
	description: 'Query for a more than or just one DiagnosticReport',
	resolve: scopeInvariant(scopeOptions, getDiagnosticReportList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DiagnosticReportInstanceQuery
 * @summary DiagnosticReport query.
 */
module.exports.DiagnosticReportInstanceQuery = {
	description: 'Access information about a single DiagnosticReport',
	resolve: scopeInvariant(scopeOptions, getDiagnosticReportInstance),
	type: DiagnosticReportSchema,
	args: args,
};
