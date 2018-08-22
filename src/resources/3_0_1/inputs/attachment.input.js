const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const UriScalar = require('../scalars/uri.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Attachment Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Attachment_Input',
	description: 'Base StructureDefinition for Attachment Type.',
	fields: () => extendSchema(require('./element.input'), {
		contentType: {
			type: CodeScalar,
			description: 'Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.'
		},
		_contentType: {
			type: require('./element.input'),
			description: 'Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The human language of the content. The value can be any valid value according to BCP 47.'
		},
		_language: {
			type: require('./element.input'),
			description: 'The human language of the content. The value can be any valid value according to BCP 47.'
		},
		data: {
			type: Base64BinaryScalar,
			description: 'The actual data of the attachment - a sequence of bytes. In XML, represented using base64.'
		},
		_data: {
			type: require('./element.input'),
			description: 'The actual data of the attachment - a sequence of bytes. In XML, represented using base64.'
		},
		url: {
			type: UriScalar,
			description: 'An alternative location where the data can be accessed.'
		},
		_url: {
			type: require('./element.input'),
			description: 'An alternative location where the data can be accessed.'
		},
		size: {
			type: UnsignedIntScalar,
			description: 'The number of bytes of data that make up this attachment (before base64 encoding, if that is done).'
		},
		_size: {
			type: require('./element.input'),
			description: 'The number of bytes of data that make up this attachment (before base64 encoding, if that is done).'
		},
		hash: {
			type: Base64BinaryScalar,
			description: 'The calculated hash of the data using SHA-1. Represented using base64.'
		},
		_hash: {
			type: require('./element.input'),
			description: 'The calculated hash of the data using SHA-1. Represented using base64.'
		},
		title: {
			type: GraphQLString,
			description: 'A label or set of text to display in place of the data.'
		},
		_title: {
			type: require('./element.input'),
			description: 'A label or set of text to display in place of the data.'
		},
		creation: {
			type: DateTimeScalar,
			description: 'The date that the attachment was first created.'
		},
		_creation: {
			type: require('./element.input'),
			description: 'The date that the attachment was first created.'
		}
	})
});
