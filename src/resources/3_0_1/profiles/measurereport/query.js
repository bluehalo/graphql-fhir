// Schemas
const MeasureReportSchema = require('../../schemas/measurereport.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const MeasureReportArgs = require('../../parameters/measurereport.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	measurereportResolver,
	measurereportListResolver,
	measurereportInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MeasureReport',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.MeasureReportQuery
 * @summary MeasureReport Query.
 */
module.exports.MeasureReportQuery = {
	args: Object.assign({}, CommonArgs, MeasureReportArgs),
	description: 'Query for a single MeasureReport',
	resolve: scopeInvariant(scopeOptions, measurereportResolver),
	type: MeasureReportSchema
};

/**
 * @name exports.MeasureReportListQuery
 * @summary MeasureReportList Query.
 */
module.exports.MeasureReportListQuery = {
	args: Object.assign({}, CommonArgs, MeasureReportArgs),
	description: 'Query for multiple MeasureReports',
	resolve: scopeInvariant(scopeOptions, measurereportListResolver),
	type: BundleSchema
};

/**
 * @name exports.MeasureReportInstanceQuery
 * @summary MeasureReportInstance Query.
 */
module.exports.MeasureReportInstanceQuery = {
	description: 'Get information about a single MeasureReport',
	resolve: scopeInvariant(scopeOptions, measurereportInstanceResolver),
	type: MeasureReportSchema
};
