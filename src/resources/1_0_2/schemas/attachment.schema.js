const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const UriScalar = require('../scalars/uri.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Attachment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Attachment',
	description: 'Base StructureDefinition for Attachment Type.',
	fields: () => extendSchema(require('./element.schema'), {
		contentType: {
			type: CodeScalar,
			description: 'Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.'
		},
		_contentType: {
			type: require('./element.schema'),
			description: 'Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.'
		},
		language: {
			type: CodeScalar,
			description: 'The human language of the content. The value can be any valid value according to BCP 47.'
		},
		_language: {
			type: require('./element.schema'),
			description: 'The human language of the content. The value can be any valid value according to BCP 47.'
		},
		data: {
			type: Base64BinaryScalar,
			description: 'The actual data of the attachment - a sequence of bytes. In XML, represented using base64.'
		},
		_data: {
			type: require('./element.schema'),
			description: 'The actual data of the attachment - a sequence of bytes. In XML, represented using base64.'
		},
		url: {
			type: UriScalar,
			description: 'An alternative location where the data can be accessed.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An alternative location where the data can be accessed.'
		},
		size: {
			type: UnsignedIntScalar,
			description: 'The number of bytes of data that make up this attachment.'
		},
		_size: {
			type: require('./element.schema'),
			description: 'The number of bytes of data that make up this attachment.'
		},
		hash: {
			type: Base64BinaryScalar,
			description: 'The calculated hash of the data using SHA-1. Represented using base64.'
		},
		_hash: {
			type: require('./element.schema'),
			description: 'The calculated hash of the data using SHA-1. Represented using base64.'
		},
		title: {
			type: GraphQLString,
			description: 'A label or set of text to display in place of the data.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A label or set of text to display in place of the data.'
		},
		creation: {
			type: DateTimeScalar,
			description: 'The date that the attachment was first created.'
		},
		_creation: {
			type: require('./element.schema'),
			description: 'The date that the attachment was first created.'
		}
	})
});
