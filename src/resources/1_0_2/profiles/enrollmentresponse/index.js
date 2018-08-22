const {
	EnrollmentResponseQuery,
	EnrollmentResponseListQuery,
	EnrollmentResponseInstanceQuery
} = require('./query');

const {
	EnrollmentResponseCreateMutation,
	EnrollmentResponseUpdateMutation,
	EnrollmentResponseDeleteMutation
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
		EnrollmentResponse: EnrollmentResponseQuery,
		EnrollmentResponseList: EnrollmentResponseListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		EnrollmentResponseCreate: EnrollmentResponseCreateMutation,
		EnrollmentResponseUpdate: EnrollmentResponseUpdateMutation,
		EnrollmentResponseDelete: EnrollmentResponseDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'EnrollmentResponse',
		path: '/1_0_2/EnrollmentResponse/:id',
		query: EnrollmentResponseInstanceQuery
	}
};
