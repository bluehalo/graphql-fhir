const {
	AllergyIntoleranceQuery,
	AllergyIntoleranceListQuery,
	AllergyIntoleranceInstanceQuery
} = require('./query');

const {
	AllergyIntoleranceCreateMutation,
	AllergyIntoleranceUpdateMutation,
	AllergyIntoleranceDeleteMutation
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
		AllergyIntolerance: AllergyIntoleranceQuery,
		AllergyIntoleranceList: AllergyIntoleranceListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		AllergyIntoleranceCreate: AllergyIntoleranceCreateMutation,
		AllergyIntoleranceUpdate: AllergyIntoleranceUpdateMutation,
		AllergyIntoleranceDelete: AllergyIntoleranceDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'AllergyIntolerance',
		path: '/1_0_2/AllergyIntolerance/:id',
		query: AllergyIntoleranceInstanceQuery
	}
};
