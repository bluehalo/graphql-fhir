const {
	SpecimenCreateMutation,
	SpecimenUpdateMutation,
	SpecimenRemoveMutation,
} = require('./mutation');

const {
	SpecimenQuery,
	SpecimenListQuery,
	SpecimenInstanceQuery,
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
		Specimen: SpecimenQuery,
		SpecimenList: SpecimenListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		SpecimenCreate: SpecimenCreateMutation,
		SpecimenUpdate: SpecimenUpdateMutation,
		SpecimenRemove: SpecimenRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Specimen',
		path: '/1_0_2/Specimen/:id',
		query: SpecimenInstanceQuery,
	},
};
