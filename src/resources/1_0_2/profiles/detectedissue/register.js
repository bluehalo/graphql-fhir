const {
	DetectedIssueCreateMutation,
	DetectedIssueUpdateMutation,
	DetectedIssueRemoveMutation,
} = require('./mutation');

const {
	DetectedIssueQuery,
	DetectedIssueListQuery,
	DetectedIssueInstanceQuery,
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
		DetectedIssue: DetectedIssueQuery,
		DetectedIssueList: DetectedIssueListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		DetectedIssueCreate: DetectedIssueCreateMutation,
		DetectedIssueUpdate: DetectedIssueUpdateMutation,
		DetectedIssueRemove: DetectedIssueRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'DetectedIssue',
		path: '/1_0_2/DetectedIssue/:id',
		query: DetectedIssueInstanceQuery,
	},
};
