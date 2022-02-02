const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CommunicationRequestpayload Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CommunicationRequestpayload',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_contentString: {
			type: require('./element.schema.js'),
			description:
				'The communicated content (or for multi-part communications, one portion of the communication).',
		},
		contentString: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The communicated content (or for multi-part communications, one portion of the communication).',
		},
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema.js')),
			description:
				'The communicated content (or for multi-part communications, one portion of the communication).',
		},
		contentReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CommunicationRequestpayloadcontentReference_contentReference_Union',
					description:
						'The communicated content (or for multi-part communications, one portion of the communication).',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'The communicated content (or for multi-part communications, one portion of the communication).',
		},
	}),
});
