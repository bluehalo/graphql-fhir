const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Binary Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Binary_Input',
	description: 'Base StructureDefinition for Binary Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		contentType: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'MimeType of the binary content represented as a standard MimeType (BCP 13).'
		},
		_contentType: {
			type: require('./element.input'),
			description: 'MimeType of the binary content represented as a standard MimeType (BCP 13).'
		},
		content: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The actual content, base64 encoded.'
		},
		_content: {
			type: require('./element.input'),
			description: 'The actual content, base64 encoded.'
		}
	})
});
