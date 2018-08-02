const {
	DetectedIssueQuery,
	DetectedIssueListQuery,
	DetectedIssueInstanceQuery
} = require('./query');

const {
	DetectedIssueCreateMutation,
	DetectedIssueUpdateMutation,
	DetectedIssueDeleteMutation
} = require('./mutation');

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
		DetectedIssueList: DetectedIssueListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		DetectedIssueCreate: DetectedIssueCreateMutation,
		DetectedIssueUpdate: DetectedIssueUpdateMutation,
		DetectedIssueDelete: DetectedIssueDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'DetectedIssue',
		path: '/3_0_1/DetectedIssue/:id',
		query: DetectedIssueInstanceQuery
	}
};
