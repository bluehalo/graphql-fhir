const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let BinaryResourceType = new GraphQLEnumType({
	name: 'BinaryResourceType',
	values: {
		Binary: { value: 'Binary' },
	},
});

/**
 * @name exports
 * @summary Binary Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Binary',
	description: 'Base StructureDefinition for Binary Resource.',
	fields: () =>
		extendSchema(require('./resource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(BinaryResourceType),
				description: 'Type of this resource.',
			},
			contentType: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'MimeType of the binary content represented as a standard MimeType (BCP 13).',
			},
			_contentType: {
				type: require('./element.schema'),
				description:
					'MimeType of the binary content represented as a standard MimeType (BCP 13).',
			},
			content: {
				type: new GraphQLNonNull(Base64BinaryScalar),
				description: 'The actual content, base64 encoded.',
			},
			_content: {
				type: require('./element.schema'),
				description: 'The actual content, base64 encoded.',
			},
		}),
});
