const {
	PractitionerQuery,
	PractitionerListQuery,
	PractitionerInstanceQuery,
} = require('./query');

const {
	PractitionerCreateMutation,
	PractitionerUpdateMutation,
	PractitionerDeleteMutation,
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
		Practitioner: PractitionerQuery,
		PractitionerList: PractitionerListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		PractitionerCreate: PractitionerCreateMutation,
		PractitionerUpdate: PractitionerUpdateMutation,
		PractitionerDelete: PractitionerDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'Practitioner',
		path: '/3_0_1/Practitioner/:id',
		query: PractitionerInstanceQuery,
	},
};
