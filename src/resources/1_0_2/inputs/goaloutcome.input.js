const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Goal.outcome Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GoalOutcome_Input',
	description:
		'Identifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			resultCodeableConcept: {
				type: require('./codeableconcept.input'),
				description: "Details of what's changed (or not changed).",
			},
			resultReference: {
				type: require('./reference.input'),
				description: "Details of what's changed (or not changed).",
			},
		}),
});
