const {
	PersonCreateMutation,
	PersonUpdateMutation,
	PersonRemoveMutation,
} = require('./mutation');

const {
	PersonQuery,
	PersonListQuery,
	PersonInstanceQuery,
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
		Person: PersonQuery,
		PersonList: PersonListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		PersonCreate: PersonCreateMutation,
		PersonUpdate: PersonUpdateMutation,
		PersonRemove: PersonRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Person',
		path: '/4_0_0/Person/:id',
		query: PersonInstanceQuery,
	},
};
