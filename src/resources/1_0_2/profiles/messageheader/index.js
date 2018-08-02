const {
	MessageHeaderQuery,
	MessageHeaderListQuery,
	MessageHeaderInstanceQuery
} = require('./query');

const {
	MessageHeaderCreateMutation,
	MessageHeaderUpdateMutation,
	MessageHeaderDeleteMutation
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
		MessageHeader: MessageHeaderQuery,
		MessageHeaderList: MessageHeaderListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		MessageHeaderCreate: MessageHeaderCreateMutation,
		MessageHeaderUpdate: MessageHeaderUpdateMutation,
		MessageHeaderDelete: MessageHeaderDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'MessageHeader',
		path: '/3_0_1/MessageHeader/:id',
		query: MessageHeaderInstanceQuery
	}
};
