const {
	ObservationCreateMutation,
	ObservationUpdateMutation,
	ObservationRemoveMutation,
} = require('./mutation');

const {
	ObservationQuery,
	ObservationListQuery,
	ObservationInstanceQuery,
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
		Observation: ObservationQuery,
		ObservationList: ObservationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ObservationCreate: ObservationCreateMutation,
		ObservationUpdate: ObservationUpdateMutation,
		ObservationRemove: ObservationRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Observation',
		path: '/3_0_1/Observation/:id',
		query: ObservationInstanceQuery,
	},
};
