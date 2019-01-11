const {
	AppointmentCreateMutation,
	AppointmentUpdateMutation,
	AppointmentRemoveMutation,
} = require('./mutation');

const {
	AppointmentQuery,
	AppointmentListQuery,
	AppointmentInstanceQuery,
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
		Appointment: AppointmentQuery,
		AppointmentList: AppointmentListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		AppointmentCreate: AppointmentCreateMutation,
		AppointmentUpdate: AppointmentUpdateMutation,
		AppointmentRemove: AppointmentRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Appointment',
		path: '/3_0_1/Appointment/:id',
		query: AppointmentInstanceQuery,
	},
};
