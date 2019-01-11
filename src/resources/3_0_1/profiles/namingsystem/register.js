const {
	NamingSystemCreateMutation,
	NamingSystemUpdateMutation,
	NamingSystemRemoveMutation,
} = require('./mutation');

const {
	NamingSystemQuery,
	NamingSystemListQuery,
	NamingSystemInstanceQuery,
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
		NamingSystem: NamingSystemQuery,
		NamingSystemList: NamingSystemListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		NamingSystemCreate: NamingSystemCreateMutation,
		NamingSystemUpdate: NamingSystemUpdateMutation,
		NamingSystemRemove: NamingSystemRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'NamingSystem',
		path: '/3_0_1/NamingSystem/:id',
		query: NamingSystemInstanceQuery,
	},
};
