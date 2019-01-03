const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary OperationDefinition.overload Schema
 */
module.exports = new GraphQLObjectType({
	name: 'OperationDefinitionOverload',
	description:
		'Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			parameterName: {
				type: new GraphQLList(GraphQLString),
				description: 'Name of parameter to include in overload.',
			},
			_parameterName: {
				type: require('./element.schema'),
				description: 'Name of parameter to include in overload.',
			},
			comment: {
				type: GraphQLString,
				description: 'Comments to go on overload.',
			},
			_comment: {
				type: require('./element.schema'),
				description: 'Comments to go on overload.',
			},
		}),
});
