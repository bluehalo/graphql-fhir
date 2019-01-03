const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary MessageDefinition.allowedResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageDefinitionAllowedResponse',
	description:
		'Indicates what types of messages may be sent as an application-level response to this message.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			message: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'A reference to the message definition that must be adhered to by this supported response.',
			},
			situation: {
				type: GraphQLString,
				description:
					'Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).',
			},
			_situation: {
				type: require('./element.schema'),
				description:
					'Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).',
			},
		}),
});
