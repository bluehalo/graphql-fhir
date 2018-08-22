const {
	AppointmentQuery,
	AppointmentListQuery,
	AppointmentInstanceQuery
} = require('./query');

const {
	AppointmentCreateMutation,
	AppointmentUpdateMutation,
	AppointmentDeleteMutation
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
		Appointment: AppointmentQuery,
		AppointmentList: AppointmentListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		AppointmentCreate: AppointmentCreateMutation,
		AppointmentUpdate: AppointmentUpdateMutation,
		AppointmentDelete: AppointmentDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Appointment',
		path: '/1_0_2/Appointment/:id',
		query: AppointmentInstanceQuery
	}
};
