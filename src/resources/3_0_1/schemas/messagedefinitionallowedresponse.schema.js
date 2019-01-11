const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MessageDefinitionallowedResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MessageDefinitionallowedResponse',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		message: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'MessageDefinitionallowedResponsemessage_message_Union',
					description:
						'A reference to the message definition that must be adhered to by this supported response.',
					types: () => [require('./messagedefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'MessageDefinition') {
							return require('./messagedefinition.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to the message definition that must be adhered to by this supported response.',
		},
		_situation: {
			type: require('./element.schema.js'),
			description:
				'Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).',
		},
		situation: {
			type: GraphQLString,
			description:
				'Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).',
		},
	}),
});
