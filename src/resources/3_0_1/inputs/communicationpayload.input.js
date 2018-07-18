const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CommunicationPayload Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CommunicationPayload_Input',
	description: 'Text, attachment(s), or resource(s) that was communicated to the recipient.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		contentString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		},
		_contentString: {
			type: require('./element.input'),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.input')),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A communicated content (or for multi-part communications, one portion of the communication).'
		}
	})
});
