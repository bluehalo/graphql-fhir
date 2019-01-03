const InstantScalar = require('../scalars/instant.scalar');
const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Signature Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Signature_Input',
	description: 'Base StructureDefinition for Signature Type.',
	fields: () => extendSchema(require('./element.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/signature-type
		type: {
			type: new GraphQLList(new GraphQLNonNull(require('./coding.input'))),
			description: 'An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.'
		},
		when: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'When the digital signature was signed.'
		},
		_when: {
			type: require('./element.input'),
			description: 'When the digital signature was signed.'
		},
		whoUri: {
			type: new GraphQLNonNull(UriScalar),
			description: 'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).'
		},
		_whoUri: {
			type: require('./element.input'),
			description: 'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).'
		},
		whoReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).'
		},
		onBehalfOfUri: {
			type: UriScalar,
			description: 'A reference to an application-usable description of the identity that is represented by the signature.'
		},
		_onBehalfOfUri: {
			type: require('./element.input'),
			description: 'A reference to an application-usable description of the identity that is represented by the signature.'
		},
		onBehalfOfReference: {
			type: require('./reference.input'),
			description: 'A reference to an application-usable description of the identity that is represented by the signature.'
		},
		contentType: {
			type: CodeScalar,
			description: 'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.'
		},
		_contentType: {
			type: require('./element.input'),
			description: 'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.'
		},
		blob: {
			type: Base64BinaryScalar,
			description: 'The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.'
		},
		_blob: {
			type: require('./element.input'),
			description: 'The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.'
		}
	})
});
