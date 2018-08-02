const {
	FamilyMemberHistoryQuery,
	FamilyMemberHistoryListQuery,
	FamilyMemberHistoryInstanceQuery
} = require('./query');

const {
	FamilyMemberHistoryCreateMutation,
	FamilyMemberHistoryUpdateMutation,
	FamilyMemberHistoryDeleteMutation
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
		FamilyMemberHistory: FamilyMemberHistoryQuery,
		FamilyMemberHistoryList: FamilyMemberHistoryListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		FamilyMemberHistoryCreate: FamilyMemberHistoryCreateMutation,
		FamilyMemberHistoryUpdate: FamilyMemberHistoryUpdateMutation,
		FamilyMemberHistoryDelete: FamilyMemberHistoryDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'FamilyMemberHistory',
		path: '/3_0_1/FamilyMemberHistory/:id',
		query: FamilyMemberHistoryInstanceQuery
	}
};
