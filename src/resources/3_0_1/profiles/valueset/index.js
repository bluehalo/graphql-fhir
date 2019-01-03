const {
	ValueSetQuery,
	ValueSetListQuery,
	ValueSetInstanceQuery,
} = require('./query');

const {
	ValueSetCreateMutation,
	ValueSetUpdateMutation,
	ValueSetDeleteMutation,
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
		ValueSet: ValueSetQuery,
		ValueSetList: ValueSetListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ValueSetCreate: ValueSetCreateMutation,
		ValueSetUpdate: ValueSetUpdateMutation,
		ValueSetDelete: ValueSetDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'ValueSet',
		path: '/3_0_1/ValueSet/:id',
		query: ValueSetInstanceQuery,
	},
};
