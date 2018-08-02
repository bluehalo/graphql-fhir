const {
	ProvenanceQuery,
	ProvenanceListQuery,
	ProvenanceInstanceQuery
} = require('./query');

const {
	ProvenanceCreateMutation,
	ProvenanceUpdateMutation,
	ProvenanceDeleteMutation
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
		Provenance: ProvenanceQuery,
		ProvenanceList: ProvenanceListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		ProvenanceCreate: ProvenanceCreateMutation,
		ProvenanceUpdate: ProvenanceUpdateMutation,
		ProvenanceDelete: ProvenanceDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Provenance',
		path: '/3_0_1/Provenance/:id',
		query: ProvenanceInstanceQuery
	}
};
