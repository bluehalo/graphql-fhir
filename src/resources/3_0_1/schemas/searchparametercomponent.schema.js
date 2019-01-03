const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SearchParameter.component Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SearchParameterComponent',
	description: 'Used to define the parts of a composite search parameter.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			definition: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'The definition of the search parameter that describes this part.',
			},
			expression: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.',
			},
			_expression: {
				type: require('./element.schema'),
				description:
					'A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.',
			},
		}),
});
