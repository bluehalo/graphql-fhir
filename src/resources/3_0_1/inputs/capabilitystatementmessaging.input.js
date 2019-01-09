const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementmessaging Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CapabilityStatementmessaging_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		endpoint: {
			type: new GraphQLList(
				require('./capabilitystatementmessagingendpoint.input.js'),
			),
			description:
				'An endpoint (network accessible address) to which messages and/or replies are to be sent.',
		},
		_reliableCache: {
			type: require('./element.input.js'),
			description:
				"Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).",
		},
		reliableCache: {
			type: UnsignedIntScalar,
			description:
				"Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).",
		},
		_documentation: {
			type: require('./element.input.js'),
			description:
				"Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.",
		},
		documentation: {
			type: GraphQLString,
			description:
				"Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.",
		},
		supportedMessage: {
			type: new GraphQLList(
				require('./capabilitystatementmessagingsupportedmessage.input.js'),
			),
			description:
				'References to message definitions for messages this system can send or receive.',
		},
		event: {
			type: new GraphQLList(
				require('./capabilitystatementmessagingevent.input.js'),
			),
			description:
				"A description of the solution's support for an event at this end-point.",
		},
	}),
});
