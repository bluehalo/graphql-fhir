const { GraphQLInputObjectType, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary OperationDefinition.overload Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OperationDefinitionOverload_Input',
	description: 'Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		parameterName: {
			type: new GraphQLList(GraphQLString),
			description: 'Name of parameter to include in overload.'
		},
		_parameterName: {
			type: require('./element.input'),
			description: 'Name of parameter to include in overload.'
		},
		comment: {
			type: GraphQLString,
			description: 'Comments to go on overload.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'Comments to go on overload.'
		}
	})
});
