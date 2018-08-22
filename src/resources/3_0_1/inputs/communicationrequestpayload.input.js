const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CommunicationRequestPayload Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CommunicationRequestPayload_Input',
	description: 'Text, attachment(s), or resource(s) to be communicated to the recipient.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		contentString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		},
		_contentString: {
			type: require('./element.input'),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentAttachment: {
			type: new GraphQLNonNull(require('./attachment.input')),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		},
		contentReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The communicated content (or for multi-part communications, one portion of the communication).'
		}
	})
});
