const {
	GraphQLInputObjectType,
	GraphQLString
} = require('graphql');

// Scalars
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const Base64Scalar = require('../scalars/base64.scalar');
const CodeScalar = require('../scalars/code.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Attachment Fields
 */
let AttachmentInput = new GraphQLInputObjectType({
	name: 'AttachmentInput',
	description: 'For referring to data content defined in other formats.',
	fields: () => extendSchema(require('./element.input'), {
		contentType: {
			type: CodeScalar,
			description: 'Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.'
		},
		_contentType: {
			type: require('./extension.input'),
			description: 'Extensions for contentType'
		},
		language: {
			type: CodeScalar,
			description: 'The human language of the content. The value can be any valid value according to BCP 47.'
		},
		_language: {
			type: require('./extension.input'),
			description: 'Extensions for language'
		},
		data: {
			type: Base64Scalar,
			description: 'The actual data of the attachment - a sequence of bytes. In XML, represented using base64.'
		},
		_data: {
			type: require('./extension.input'),
			description: 'Extensions for data'
		},
		url: {
			type: GraphQLString,
			description: 'An alternative location where the data can be accessed.'
		},
		_url: {
			type: require('./extension.input'),
			description: 'Extensions for url'
		},
		size: {
			type: UnsignedIntScalar,
			description: 'The number of bytes of data that make up this attachment (before base64 encoding, if that is done).'
		},
		_size: {
			type: require('./extension.input'),
			description: 'Extensions for size'
		},
		hash: {
			type: Base64Scalar,
			description: 'The calculated hash of the data using SHA-1. Represented using base64.'
		},
		_hash: {
			type: require('./extension.input'),
			description: 'Extensions for hash'
		},
		title: {
			type: GraphQLString,
			description: 'A label or set of text to display in place of the data.'
		},
		_title: {
			type: require('./extension.input'),
			description: 'Extensions for title'
		},
		creation: {
			type: DateTimeScalar,
			description: 'The date that the attachment was first created.'
		},
		_creation: {
			type: require('./extension.input'),
			description: 'Extensions for creation'
		}
	})
});

module.exports = AttachmentInput;
