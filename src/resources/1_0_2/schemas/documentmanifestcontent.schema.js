const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary DocumentManifestcontent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentManifestcontent',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		pAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema.js')),
			description:
				'The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.',
		},
		pReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'DocumentManifestcontentpReference_pReference_Union',
					description:
						'The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.',
		},
	}),
});
