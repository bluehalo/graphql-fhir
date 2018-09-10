const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DocumentManifest.content Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentManifestContent',
	description: 'The list of Documents included in the manifest.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		pAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema')),
			description: 'The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.'
		},
		pReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.'
		}
	})
});
