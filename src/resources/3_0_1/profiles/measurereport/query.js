// Schemas
const MeasureReportSchema = require('../../schemas/measurereport.schema');

// Arguments
const MeasureReportArgs = require('../../parameters/measurereport.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	measurereportResolver,
	measurereportListResolver,
	measurereportInstanceResolver
} = require('./resolver');

/**
 * @name exports.MeasureReportQuery
 * @summary MeasureReport Query.
 */
module.exports.MeasureReportQuery = {
	args: Object.assign({}, CommonArgs, MeasureReportArgs),
	description: 'Query for a single MeasureReport',
	resolve: measurereportResolver,
	type: MeasureReportSchema
};

/**
 * @name exports.MeasureReportListQuery
 * @summary MeasureReportList Query.
 */
module.exports.MeasureReportListQuery = {
	args: Object.assign({}, CommonArgs, MeasureReportArgs),
	description: 'Query for multiple MeasureReports',
	resolve: measurereportListResolver,
	type: new GraphQLList(MeasureReportSchema)
};

/**
 * @name exports.MeasureReportInstanceQuery
 * @summary MeasureReportInstance Query.
 */
module.exports.MeasureReportInstanceQuery = {
	description: 'Get information about a single MeasureReport',
	resolve: measurereportInstanceResolver,
	type: MeasureReportSchema
};
