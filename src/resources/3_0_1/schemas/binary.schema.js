const CodeScalar = require('../scalars/code.scalar');
const Base64BinaryScalar = require('../scalars/base64binary.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Binary Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Binary',
	description: 'Base StructureDefinition for Binary Resource.',
	fields: () => extendSchema(require('./resource.schema'), {
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
			type: require('./element.schema'),
			description: 'MimeType of the binary content represented as a standard MimeType (BCP 13).'
		},
		securityContext: {
			type: require('./reference.schema'),
			description: 'Treat this binary as if it was this other resource for access control purposes.'
		},
		content: {
			type: new GraphQLNonNull(Base64BinaryScalar),
			description: 'The actual content, base64 encoded.'
		},
		_content: {
			type: require('./element.schema'),
			description: 'The actual content, base64 encoded.'
		}
	})
});
