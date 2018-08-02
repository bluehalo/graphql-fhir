const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CommunicationPayload Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CommunicationPayload',
	description: 'Text, attachment(s), or resource(s) that was communicated to the recipient.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		contentString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		},
		_contentString: {
			type: require('./element.schema'),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema')),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		}
	})
});
