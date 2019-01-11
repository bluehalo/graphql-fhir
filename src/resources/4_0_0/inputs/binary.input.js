const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');

/**
 * @name exports
 * @summary Binary Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Binary_Input',
	description:
		'A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Binary_Enum_input',
					values: { Binary: { value: 'Binary' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		_contentType: {
			type: require('./element.input.js'),
			description:
				'MimeType of the binary content represented as a standard MimeType (BCP 13).',
		},
		contentType: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'MimeType of the binary content represented as a standard MimeType (BCP 13).',
		},
		securityContext: {
			type: GraphQLString,
			description:
				'This element identifies another resource that can be used as a proxy of the security sensitivity to use when deciding and enforcing access control rules for the Binary resource. Given that the Binary resource contains very few elements that can be used to determine the sensitivity of the data and relationships to individuals, the referenced resource stands in as a proxy equivalent for this purpose. This referenced resource may be related to the Binary (e.g. Media, DocumentReference), or may be some non-related Resource purely as a security proxy. E.g. to identify that the binary resource relates to a patient, and access should only be granted to applications that have access to the patient.',
		},
		_data: {
			type: require('./element.input.js'),
			description: 'The actual content, base64 encoded.',
		},
		data: {
			type: Base64BinaryScalar,
			description: 'The actual content, base64 encoded.',
		},
	}),
});
