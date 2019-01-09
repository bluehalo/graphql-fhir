const {
	FlagCreateMutation,
	FlagUpdateMutation,
	FlagRemoveMutation,
} = require('./mutation');

const { FlagQuery, FlagListQuery, FlagInstanceQuery } = require('./query');

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
		Flag: FlagQuery,
		FlagList: FlagListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		FlagCreate: FlagCreateMutation,
		FlagUpdate: FlagUpdateMutation,
		FlagRemove: FlagRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Flag',
		path: '/1_0_2/Flag/:id',
		query: FlagInstanceQuery,
	},
};
