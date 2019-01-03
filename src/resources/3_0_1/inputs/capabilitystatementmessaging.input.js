const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const {
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary CapabilityStatement.messaging Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementMessaging_Input',
	description: 'A description of the messaging capabilities of the solution.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			endpoint: {
				type: new GraphQLList(
					require('./capabilitystatementmessagingendpoint.input'),
				),
				description:
					'An endpoint (network accessible address) to which messages and/or replies are to be sent.',
			},
			reliableCache: {
				type: UnsignedIntScalar,
				description:
					"Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).",
			},
			_reliableCache: {
				type: require('./element.input'),
				description:
					"Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).",
			},
			documentation: {
				type: GraphQLString,
				description:
					"Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.",
			},
			_documentation: {
				type: require('./element.input'),
				description:
					"Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.",
			},
			supportedMessage: {
				type: new GraphQLList(
					require('./capabilitystatementmessagingsupportedmessage.input'),
				),
				description:
					'References to message definitions for messages this system can send or receive.',
			},
			event: {
				type: new GraphQLList(
					require('./capabilitystatementmessagingevent.input'),
				),
				description:
					"A description of the solution's support for an event at this end-point.",
			},
		}),
});
