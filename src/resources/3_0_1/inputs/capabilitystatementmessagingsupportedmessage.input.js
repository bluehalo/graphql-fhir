const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CapabilityStatementMessagingSupportedMessage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementMessagingSupportedMessage_Input',
	description: 'References to message definitions for messages this system can send or receive.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/event-capability-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The mode of this event declaration - whether application is sender or receiver.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'The mode of this event declaration - whether application is sender or receiver.'
		},
		definition: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.'
		}
	})
});
