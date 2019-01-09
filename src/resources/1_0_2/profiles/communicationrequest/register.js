const {
	CommunicationRequestCreateMutation,
	CommunicationRequestUpdateMutation,
	CommunicationRequestRemoveMutation,
} = require('./mutation');

const {
	CommunicationRequestQuery,
	CommunicationRequestListQuery,
	CommunicationRequestInstanceQuery,
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
		CommunicationRequest: CommunicationRequestQuery,
		CommunicationRequestList: CommunicationRequestListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		CommunicationRequestCreate: CommunicationRequestCreateMutation,
		CommunicationRequestUpdate: CommunicationRequestUpdateMutation,
		CommunicationRequestRemove: CommunicationRequestRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'CommunicationRequest',
		path: '/1_0_2/CommunicationRequest/:id',
		query: CommunicationRequestInstanceQuery,
	},
};
