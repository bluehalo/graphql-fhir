const {
	EpisodeOfCareQuery,
	EpisodeOfCareListQuery,
	EpisodeOfCareInstanceQuery
} = require('./query');

const {
	EpisodeOfCareCreateMutation,
	EpisodeOfCareUpdateMutation,
	EpisodeOfCareDeleteMutation
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
		EpisodeOfCare: EpisodeOfCareQuery,
		EpisodeOfCareList: EpisodeOfCareListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		EpisodeOfCareCreate: EpisodeOfCareCreateMutation,
		EpisodeOfCareUpdate: EpisodeOfCareUpdateMutation,
		EpisodeOfCareDelete: EpisodeOfCareDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'EpisodeOfCare',
		path: '/1_0_2/EpisodeOfCare/:id',
		query: EpisodeOfCareInstanceQuery
	}
};
