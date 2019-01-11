const {
	ClaimCreateMutation,
	ClaimUpdateMutation,
	ClaimRemoveMutation,
} = require('./mutation');

const { ClaimQuery, ClaimListQuery, ClaimInstanceQuery } = require('./query');

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
		Claim: ClaimQuery,
		ClaimList: ClaimListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ClaimCreate: ClaimCreateMutation,
		ClaimUpdate: ClaimUpdateMutation,
		ClaimRemove: ClaimRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Claim',
		path: '/3_0_1/Claim/:id',
		query: ClaimInstanceQuery,
	},
};
