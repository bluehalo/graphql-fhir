const {
	ClaimResponseCreateMutation,
	ClaimResponseUpdateMutation,
	ClaimResponseRemoveMutation,
} = require('./mutation');

const {
	ClaimResponseQuery,
	ClaimResponseListQuery,
	ClaimResponseInstanceQuery,
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
		ClaimResponse: ClaimResponseQuery,
		ClaimResponseList: ClaimResponseListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ClaimResponseCreate: ClaimResponseCreateMutation,
		ClaimResponseUpdate: ClaimResponseUpdateMutation,
		ClaimResponseRemove: ClaimResponseRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ClaimResponse',
		path: '/1_0_2/ClaimResponse/:id',
		query: ClaimResponseInstanceQuery,
	},
};
