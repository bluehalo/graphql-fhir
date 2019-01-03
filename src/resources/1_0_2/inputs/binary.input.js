const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let BinaryResourceInputType = new GraphQLEnumType({
	name: 'BinaryResourceInputType',
	values: {
		Binary: { value: 'Binary' },
	},
});

/**
 * @name exports
 * @summary Binary Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Binary_Input',
	description: 'Base StructureDefinition for Binary Resource.',
	fields: () =>
		extendSchema(require('./resource.input'), {
			resourceType: {
				type: new GraphQLNonNull(BinaryResourceInputType),
				description: 'Type of this resource.',
			},
			contentType: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'MimeType of the binary content represented as a standard MimeType (BCP 13).',
			},
			_contentType: {
				type: require('./element.input'),
				description:
					'MimeType of the binary content represented as a standard MimeType (BCP 13).',
			},
			content: {
				type: new GraphQLNonNull(Base64BinaryScalar),
				description: 'The actual content, base64 encoded.',
			},
			_content: {
				type: require('./element.input'),
				description: 'The actual content, base64 encoded.',
			},
		}),
});
