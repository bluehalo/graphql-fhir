const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary PlanDefinition.action.dynamicValue Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PlanDefinitionActionDynamicValue',
	description:
		"Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.",
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			description: {
				type: GraphQLString,
				description:
					'A brief, natural language description of the intended semantics of the dynamic value.',
			},
			_description: {
				type: require('./element.schema'),
				description:
					'A brief, natural language description of the intended semantics of the dynamic value.',
			},
			path: {
				type: GraphQLString,
				description:
					'The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.',
			},
			_path: {
				type: require('./element.schema'),
				description:
					'The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.',
			},
			language: {
				type: GraphQLString,
				description: 'The media type of the language for the expression.',
			},
			_language: {
				type: require('./element.schema'),
				description: 'The media type of the language for the expression.',
			},
			expression: {
				type: GraphQLString,
				description:
					'An expression specifying the value of the customized element.',
			},
			_expression: {
				type: require('./element.schema'),
				description:
					'An expression specifying the value of the customized element.',
			},
		}),
});
