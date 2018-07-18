const {
	FlagQuery,
	FlagListQuery,
	FlagInstanceQuery
} = require('./query');

const {
	FlagCreateMutation,
	FlagUpdateMutation,
	FlagDeleteMutation
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
		Flag: FlagQuery,
		FlagList: FlagListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		FlagCreate: FlagCreateMutation,
		FlagUpdate: FlagUpdateMutation,
		FlagDelete: FlagDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Flag',
		path: '/3_0_1/Flag/:id',
		query: FlagInstanceQuery
	}
};
