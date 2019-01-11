const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CapabilityStatementmessagingsupportedMessage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementmessagingsupportedMessage',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_mode: {
			type: require('./element.schema.js'),
			description:
				'The mode of this event declaration - whether application is sender or receiver.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-capability-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The mode of this event declaration - whether application is sender or receiver.',
		},
		definition: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name:
						'CapabilityStatementmessagingsupportedMessagedefinition_definition_Union',
					description:
						'Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.',
					types: () => [require('./messagedefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'MessageDefinition') {
							return require('./messagedefinition.schema.js');
						}
					},
				}),
			),
			description:
				'Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.',
		},
	}),
});
