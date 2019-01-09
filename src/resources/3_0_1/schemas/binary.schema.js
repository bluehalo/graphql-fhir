const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');

/**
 * @name exports
 * @summary Binary Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Binary',
	description: 'Base StructureDefinition for Binary Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Binary_Enum_schema',
					values: { Binary: { value: 'Binary' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		_contentType: {
			type: require('./element.schema.js'),
			description:
				'MimeType of the binary content represented as a standard MimeType (BCP 13).',
		},
		contentType: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'MimeType of the binary content represented as a standard MimeType (BCP 13).',
		},
		securityContext: {
			type: new GraphQLUnionType({
				name: 'BinarysecurityContext_securityContext_Union',
				description:
					'Treat this binary as if it was this other resource for access control purposes.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'Treat this binary as if it was this other resource for access control purposes.',
		},
		_content: {
			type: require('./element.schema.js'),
			description: 'The actual content, base64 encoded.',
		},
		content: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The actual content, base64 encoded.',
		},
	}),
});
