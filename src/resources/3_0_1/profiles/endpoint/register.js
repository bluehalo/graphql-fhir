const {
	EndpointCreateMutation,
	EndpointUpdateMutation,
	EndpointRemoveMutation,
} = require('./mutation');

const {
	EndpointQuery,
	EndpointListQuery,
	EndpointInstanceQuery,
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
		Endpoint: EndpointQuery,
		EndpointList: EndpointListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		EndpointCreate: EndpointCreateMutation,
		EndpointUpdate: EndpointUpdateMutation,
		EndpointRemove: EndpointRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Endpoint',
		path: '/3_0_1/Endpoint/:id',
		query: EndpointInstanceQuery,
	},
};
