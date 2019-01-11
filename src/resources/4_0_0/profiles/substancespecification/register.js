const {
	SubstanceSpecificationCreateMutation,
	SubstanceSpecificationUpdateMutation,
	SubstanceSpecificationRemoveMutation,
} = require('./mutation');

const {
	SubstanceSpecificationQuery,
	SubstanceSpecificationListQuery,
	SubstanceSpecificationInstanceQuery,
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
		SubstanceSpecification: SubstanceSpecificationQuery,
		SubstanceSpecificationList: SubstanceSpecificationListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		SubstanceSpecificationCreate: SubstanceSpecificationCreateMutation,
		SubstanceSpecificationUpdate: SubstanceSpecificationUpdateMutation,
		SubstanceSpecificationRemove: SubstanceSpecificationRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'SubstanceSpecification',
		path: '/4_0_0/SubstanceSpecification/:id',
		query: SubstanceSpecificationInstanceQuery,
	},
};
