// Schemas
const DiagnosticReportSchema = require('../../schemas/diagnosticreport.schema');

// Arguments
const DiagnosticReportArgs = require('../../parameters/diagnosticreport.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	diagnosticreportResolver,
	diagnosticreportListResolver,
	diagnosticreportInstanceResolver
} = require('./resolver');

/**
 * @name exports.DiagnosticReportQuery
 * @summary DiagnosticReport Query.
 */
module.exports.DiagnosticReportQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticReportArgs),
	description: 'Query for a single DiagnosticReport',
	resolve: diagnosticreportResolver,
	type: DiagnosticReportSchema
};

/**
 * @name exports.DiagnosticReportListQuery
 * @summary DiagnosticReportList Query.
 */
module.exports.DiagnosticReportListQuery = {
	args: Object.assign({}, CommonArgs, DiagnosticReportArgs),
	description: 'Query for multiple DiagnosticReports',
	resolve: diagnosticreportListResolver,
	type: new GraphQLList(DiagnosticReportSchema)
};

/**
 * @name exports.DiagnosticReportInstanceQuery
 * @summary DiagnosticReportInstance Query.
 */
module.exports.DiagnosticReportInstanceQuery = {
	description: 'Get information about a single DiagnosticReport',
	resolve: diagnosticreportInstanceResolver,
	type: DiagnosticReportSchema
};
