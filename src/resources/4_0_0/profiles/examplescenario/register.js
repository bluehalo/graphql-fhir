const {
	ExampleScenarioCreateMutation,
	ExampleScenarioUpdateMutation,
	ExampleScenarioRemoveMutation,
} = require('./mutation');

const {
	ExampleScenarioQuery,
	ExampleScenarioListQuery,
	ExampleScenarioInstanceQuery,
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
		ExampleScenario: ExampleScenarioQuery,
		ExampleScenarioList: ExampleScenarioListQuery,
	},
	/**
	 * Define Mutation Schema's here
	 * Each profile will need to define the supported mutations
	 * and these keys must be unique across the entire application, like routes
	 */
	mutation: {
		ExampleScenarioCreate: ExampleScenarioCreateMutation,
		ExampleScenarioUpdate: ExampleScenarioUpdateMutation,
		ExampleScenarioRemove: ExampleScenarioRemoveMutation,
	},
	/**
	 * These properties are so the core router can setup the approriate endpoint
	 * for a direct query against a resource
	 */
	instance: {
		name: 'ExampleScenario',
		path: '/4_0_0/ExampleScenario/:id',
		query: ExampleScenarioInstanceQuery,
	},
};
