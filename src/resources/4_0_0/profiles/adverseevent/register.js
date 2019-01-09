const {
	AdverseEventCreateMutation,
	AdverseEventUpdateMutation,
	AdverseEventRemoveMutation,
} = require('./mutation');

const {
	AdverseEventQuery,
	AdverseEventListQuery,
	AdverseEventInstanceQuery,
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
		AdverseEvent: AdverseEventQuery,
		AdverseEventList: AdverseEventListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		AdverseEventCreate: AdverseEventCreateMutation,
		AdverseEventUpdate: AdverseEventUpdateMutation,
		AdverseEventRemove: AdverseEventRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'AdverseEvent',
		path: '/4_0_0/AdverseEvent/:id',
		query: AdverseEventInstanceQuery,
	},
};
