// Schemas
const DiagnosticReportSchema = require('../../schemas/diagnosticreport.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DiagnosticReportArgs = require('../../parameters/diagnosticreport.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	diagnosticreportResolver,
	diagnosticreportListResolver,
	diagnosticreportInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DiagnosticReport',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.DiagnosticReportQuery
 * @summary DiagnosticReport Query.
 */
module.exports.DiagnosticReportQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticReportArgs),
	description: 'Query for a single DiagnosticReport',
	resolve: scopeInvariant(scopeOptions, diagnosticreportResolver),
	type: DiagnosticReportSchema,
};

/**
 * @name exports.DiagnosticReportListQuery
 * @summary DiagnosticReportList Query.
 */
module.exports.DiagnosticReportListQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticReportArgs),
	description: 'Query for multiple DiagnosticReports',
	resolve: scopeInvariant(scopeOptions, diagnosticreportListResolver),
	type: BundleSchema,
};

/**
 * @name exports.DiagnosticReportInstanceQuery
 * @summary DiagnosticReportInstance Query.
 */
module.exports.DiagnosticReportInstanceQuery = {
	description: 'Get information about a single DiagnosticReport',
	resolve: scopeInvariant(scopeOptions, diagnosticreportInstanceResolver),
	type: DiagnosticReportSchema,
};
