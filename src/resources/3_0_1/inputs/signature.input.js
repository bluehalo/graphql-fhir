const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLFloat,
	GraphQLList
} = require('graphql');

// Scalars
const InstantScalar = require('../scalars/instant.scalar');
const Base64Scalar = require('../scalars/base64.scalar');
const CodeScalar = require('../scalars/code.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Signature Fields
 */
let SignatureInput = new GraphQLInputObjectType({
	name: 'SignatureInput',
	description: 'A digital signature along with supporting context.'
		+ ' The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process.'
		+ ' Different signature approaches have different utilities.',
	fields: () => extendSchema(require('./element.input'), {
		type: {
			type: new GraphQLList(require('./coding.input')),
			description: 'An indication of the reason that the entity signed this document.'
				+ ' This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.'
		},
		when: {
			type: InstantScalar,
			description: 'When the digital signature was signed.'
		},
		_when: {
			type: require('./extension.input'),
			description: 'Extensions for numerator'
		},
		whoUri: {
			type: GraphQLFloat,
			description: 'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).'
		},
		_whoUri: {
			type: require('./extension.input'),
			description: 'Extensions for whoUri'
		},
		whoReference: {
			type: require('./reference.input'),
			description: 'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).'
		},
		onBehalfOfUri: {
			type: GraphQLString,
			description: 'A reference to an application-usable description of the identity that is represented by the signature.'
		},
		_onBehalfOfUri: {
			type: require('./extension.input'),
			description: 'Extensions for onBehalfOfUri'
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
			type: require('./extension.input'),
			description: 'Extensions for contentType'
		},
		blob: {
			type: Base64Scalar,
			description: 'The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.'
		},
		_blob: {
			type: require('./extension.input'),
			description: 'Extensions for blob'
		}
	})
});

module.exports = SignatureInput;
