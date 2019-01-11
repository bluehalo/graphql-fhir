const {
	RelatedPersonCreateMutation,
	RelatedPersonUpdateMutation,
	RelatedPersonRemoveMutation,
} = require('./mutation');

const {
	RelatedPersonQuery,
	RelatedPersonListQuery,
	RelatedPersonInstanceQuery,
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
		RelatedPerson: RelatedPersonQuery,
		RelatedPersonList: RelatedPersonListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		RelatedPersonCreate: RelatedPersonCreateMutation,
		RelatedPersonUpdate: RelatedPersonUpdateMutation,
		RelatedPersonRemove: RelatedPersonRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'RelatedPerson',
		path: '/1_0_2/RelatedPerson/:id',
		query: RelatedPersonInstanceQuery,
	},
};
