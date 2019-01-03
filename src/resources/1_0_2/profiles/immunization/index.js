const {
	ImmunizationQuery,
	ImmunizationListQuery,
	ImmunizationInstanceQuery,
} = require('./query');

const {
	ImmunizationCreateMutation,
	ImmunizationUpdateMutation,
	ImmunizationDeleteMutation,
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
		Immunization: ImmunizationQuery,
		ImmunizationList: ImmunizationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ImmunizationCreate: ImmunizationCreateMutation,
		ImmunizationUpdate: ImmunizationUpdateMutation,
		ImmunizationDelete: ImmunizationDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'Immunization',
		path: '/1_0_2/Immunization/:id',
		query: ImmunizationInstanceQuery,
	},
};
