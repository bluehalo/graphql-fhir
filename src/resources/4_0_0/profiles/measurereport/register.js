const {
	MeasureReportCreateMutation,
	MeasureReportUpdateMutation,
	MeasureReportRemoveMutation,
} = require('./mutation');

const {
	MeasureReportQuery,
	MeasureReportListQuery,
	MeasureReportInstanceQuery,
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
		MeasureReport: MeasureReportQuery,
		MeasureReportList: MeasureReportListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MeasureReportCreate: MeasureReportCreateMutation,
		MeasureReportUpdate: MeasureReportUpdateMutation,
		MeasureReportRemove: MeasureReportRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MeasureReport',
		path: '/4_0_0/MeasureReport/:id',
		query: MeasureReportInstanceQuery,
	},
};
