const {
	MeasureCreateMutation,
	MeasureUpdateMutation,
	MeasureRemoveMutation,
} = require('./mutation');

const {
	MeasureQuery,
	MeasureListQuery,
	MeasureInstanceQuery,
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
		Measure: MeasureQuery,
		MeasureList: MeasureListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MeasureCreate: MeasureCreateMutation,
		MeasureUpdate: MeasureUpdateMutation,
		MeasureRemove: MeasureRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Measure',
		path: '/3_0_1/Measure/:id',
		query: MeasureInstanceQuery,
	},
};
