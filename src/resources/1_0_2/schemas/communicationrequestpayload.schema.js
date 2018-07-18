const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CommunicationRequestPayload Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CommunicationRequestPayload',
	description: 'Text, attachment(s), or resource(s) to be communicated to the recipient.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		contentString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		},
		_contentString: {
			type: require('./element.schema'),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.schema')),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		}
	})
});
