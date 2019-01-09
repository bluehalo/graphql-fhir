const {
	SequenceCreateMutation,
	SequenceUpdateMutation,
	SequenceRemoveMutation,
} = require('./mutation');

const {
	SequenceQuery,
	SequenceListQuery,
	SequenceInstanceQuery,
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
		Sequence: SequenceQuery,
		SequenceList: SequenceListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		SequenceCreate: SequenceCreateMutation,
		SequenceUpdate: SequenceUpdateMutation,
		SequenceRemove: SequenceRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'Sequence',
		path: '/3_0_1/Sequence/:id',
		query: SequenceInstanceQuery,
	},
};
