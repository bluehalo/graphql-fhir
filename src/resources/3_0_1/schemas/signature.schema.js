const InstantScalar = require('../scalars/instant.scalar');
const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Signature Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Signature',
	description: 'Base StructureDefinition for Signature Type.',
	fields: () =>
		extendSchema(require('./element.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/signature-type
			type: {
				type: new GraphQLList(new GraphQLNonNull(require('./coding.schema'))),
				description:
					'An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.',
			},
			when: {
				type: new GraphQLNonNull(InstantScalar),
				description: 'When the digital signature was signed.',
			},
			_when: {
				type: require('./element.schema'),
				description: 'When the digital signature was signed.',
			},
			whoUri: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).',
			},
			_whoUri: {
				type: require('./element.schema'),
				description:
					'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).',
			},
			whoReference: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).',
			},
			onBehalfOfUri: {
				type: UriScalar,
				description:
					'A reference to an application-usable description of the identity that is represented by the signature.',
			},
			_onBehalfOfUri: {
				type: require('./element.schema'),
				description:
					'A reference to an application-usable description of the identity that is represented by the signature.',
			},
			onBehalfOfReference: {
				type: require('./reference.schema'),
				description:
					'A reference to an application-usable description of the identity that is represented by the signature.',
			},
			contentType: {
				type: CodeScalar,
				description:
					'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.',
			},
			_contentType: {
				type: require('./element.schema'),
				description:
					'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.',
			},
			blob: {
				type: Base64BinaryScalar,
				description:
					'The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.',
			},
			_blob: {
				type: require('./element.schema'),
				description:
					'The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.',
			},
		}),
});
