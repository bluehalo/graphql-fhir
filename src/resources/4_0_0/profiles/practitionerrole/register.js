const {
	PractitionerRoleCreateMutation,
	PractitionerRoleUpdateMutation,
	PractitionerRoleRemoveMutation,
} = require('./mutation');

const {
	PractitionerRoleQuery,
	PractitionerRoleListQuery,
	PractitionerRoleInstanceQuery,
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
		PractitionerRole: PractitionerRoleQuery,
		PractitionerRoleList: PractitionerRoleListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		PractitionerRoleCreate: PractitionerRoleCreateMutation,
		PractitionerRoleUpdate: PractitionerRoleUpdateMutation,
		PractitionerRoleRemove: PractitionerRoleRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'PractitionerRole',
		path: '/4_0_0/PractitionerRole/:id',
		query: PractitionerRoleInstanceQuery,
	},
};
