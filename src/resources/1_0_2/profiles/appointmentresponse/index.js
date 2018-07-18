const {
	AppointmentResponseQuery,
	AppointmentResponseListQuery,
	AppointmentResponseInstanceQuery
} = require('./query');

const {
	AppointmentResponseCreateMutation,
	AppointmentResponseUpdateMutation,
	AppointmentResponseDeleteMutation
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
		AppointmentResponse: AppointmentResponseQuery,
		AppointmentResponseList: AppointmentResponseListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		AppointmentResponseCreate: AppointmentResponseCreateMutation,
		AppointmentResponseUpdate: AppointmentResponseUpdateMutation,
		AppointmentResponseDelete: AppointmentResponseDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'AppointmentResponse',
		path: '/3_0_1/AppointmentResponse/:id',
		query: AppointmentResponseInstanceQuery
	}
};
