const {
	TestReportCreateMutation,
	TestReportUpdateMutation,
	TestReportRemoveMutation,
} = require('./mutation');

const {
	TestReportQuery,
	TestReportListQuery,
	TestReportInstanceQuery,
} = require('./query');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	 * Define Query Schema's here
	 * Each profile will need to define the two queries it supports
	 * and these keys must be unique across the entire application, like routes
	 */
	query: {
		TestReport: TestReportQuery,
		TestReportList: TestReportListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		TestReportCreate: TestReportCreateMutation,
		TestReportUpdate: TestReportUpdateMutation,
		TestReportRemove: TestReportRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'TestReport',
		path: '/3_0_1/TestReport/:id',
		query: TestReportInstanceQuery,
	},
};
