// Schemas
const TestReportSchema = require('../../schemas/testreport.schema');

// Arguments
const TestReportArgs = require('../../parameters/testreport.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	testreportResolver,
	testreportListResolver,
	testreportInstanceResolver
} = require('./resolver');

/**
 * @name exports.TestReportQuery
 * @summary TestReport Query.
 */
module.exports.TestReportQuery = {
	args: Object.assign({}, CommonArgs, TestReportArgs),
	description: 'Query for a single TestReport',
	resolve: testreportResolver,
	type: TestReportSchema
};

/**
 * @name exports.TestReportListQuery
 * @summary TestReportList Query.
 */
module.exports.TestReportListQuery = {
	args: Object.assign({}, CommonArgs, TestReportArgs),
	description: 'Query for multiple TestReports',
	resolve: testreportListResolver,
	type: new GraphQLList(TestReportSchema)
};

/**
 * @name exports.TestReportInstanceQuery
 * @summary TestReportInstance Query.
 */
module.exports.TestReportInstanceQuery = {
	description: 'Get information about a single TestReport',
	resolve: testreportInstanceResolver,
	type: TestReportSchema
};
