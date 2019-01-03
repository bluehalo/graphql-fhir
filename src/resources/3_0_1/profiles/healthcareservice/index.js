const {
	HealthcareServiceQuery,
	HealthcareServiceListQuery,
	HealthcareServiceInstanceQuery,
} = require('./query');

const {
	HealthcareServiceCreateMutation,
	HealthcareServiceUpdateMutation,
	HealthcareServiceDeleteMutation,
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
		HealthcareService: HealthcareServiceQuery,
		HealthcareServiceList: HealthcareServiceListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		HealthcareServiceCreate: HealthcareServiceCreateMutation,
		HealthcareServiceUpdate: HealthcareServiceUpdateMutation,
		HealthcareServiceDelete: HealthcareServiceDeleteMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance_query: {
		name: 'HealthcareService',
		path: '/3_0_1/HealthcareService/:id',
		query: HealthcareServiceInstanceQuery,
	},
};
