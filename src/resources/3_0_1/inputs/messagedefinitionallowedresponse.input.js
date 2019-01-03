const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary MessageDefinition.allowedResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MessageDefinitionAllowedResponse_Input',
	description:
		'Indicates what types of messages may be sent as an application-level response to this message.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			message: {
				type: new GraphQLNonNull(require('./reference.input')),
				description:
					'A reference to the message definition that must be adhered to by this supported response.',
			},
			situation: {
				type: GraphQLString,
				description:
					'Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).',
			},
			_situation: {
				type: require('./element.input'),
				description:
					'Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).',
			},
		}),
});
