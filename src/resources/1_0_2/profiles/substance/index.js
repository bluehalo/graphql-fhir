const {
	SubstanceQuery,
	SubstanceListQuery,
	SubstanceInstanceQuery
} = require('./query');

const {
	SubstanceCreateMutation,
	SubstanceUpdateMutation,
	SubstanceDeleteMutation
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
		Substance: SubstanceQuery,
		SubstanceList: SubstanceListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		SubstanceCreate: SubstanceCreateMutation,
		SubstanceUpdate: SubstanceUpdateMutation,
		SubstanceDelete: SubstanceDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Substance',
		path: '/1_0_2/Substance/:id',
		query: SubstanceInstanceQuery
	}
};
