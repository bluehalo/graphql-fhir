const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ExampleScenarioprocessstepoperation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExampleScenarioprocessstepoperation_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_number: {
			type: require('./element.input.js'),
			description: 'The sequential number of the interaction, e.g. 1.2.5.',
		},
		number: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The sequential number of the interaction, e.g. 1.2.5.',
		},
		_type: {
			type: require('./element.input.js'),
			description: 'The type of operation - CRUD.',
		},
		type: {
			type: GraphQLString,
			description: 'The type of operation - CRUD.',
		},
		_name: {
			type: require('./element.input.js'),
			description: 'The human-friendly name of the interaction.',
		},
		name: {
			type: GraphQLString,
			description: 'The human-friendly name of the interaction.',
		},
		_initiator: {
			type: require('./element.input.js'),
			description: 'Who starts the transaction.',
		},
		initiator: {
			type: GraphQLString,
			description: 'Who starts the transaction.',
		},
		_receiver: {
			type: require('./element.input.js'),
			description: 'Who receives the transaction.',
		},
		receiver: {
			type: GraphQLString,
			description: 'Who receives the transaction.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'A comment to be inserted in the diagram.',
		},
		description: {
			type: GraphQLString,
			description: 'A comment to be inserted in the diagram.',
		},
		_initiatorActive: {
			type: require('./element.input.js'),
			description:
				'Whether the initiator is deactivated right after the transaction.',
		},
		initiatorActive: {
			type: GraphQLBoolean,
			description:
				'Whether the initiator is deactivated right after the transaction.',
		},
		_receiverActive: {
			type: require('./element.input.js'),
			description:
				'Whether the receiver is deactivated right after the transaction.',
		},
		receiverActive: {
			type: GraphQLBoolean,
			description:
				'Whether the receiver is deactivated right after the transaction.',
		},
	}),
});
