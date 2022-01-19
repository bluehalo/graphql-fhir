const {
	MedicinalProductUndesirableEffectCreateMutation,
	MedicinalProductUndesirableEffectUpdateMutation,
	MedicinalProductUndesirableEffectRemoveMutation,
} = require('./mutation');

const {
	MedicinalProductUndesirableEffectQuery,
	MedicinalProductUndesirableEffectListQuery,
	MedicinalProductUndesirableEffectInstanceQuery,
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
		MedicinalProductUndesirableEffect: MedicinalProductUndesirableEffectQuery,
		MedicinalProductUndesirableEffectList:
			MedicinalProductUndesirableEffectListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		MedicinalProductUndesirableEffectCreate:
			MedicinalProductUndesirableEffectCreateMutation,
		MedicinalProductUndesirableEffectUpdate:
			MedicinalProductUndesirableEffectUpdateMutation,
		MedicinalProductUndesirableEffectRemove:
			MedicinalProductUndesirableEffectRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'MedicinalProductUndesirableEffect',
		path: '/4_0_0/MedicinalProductUndesirableEffect/:id',
		query: MedicinalProductUndesirableEffectInstanceQuery,
	},
};
