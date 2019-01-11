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
 * @summary CapabilityStatementmessagingevent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementmessagingevent',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-events
		code: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'A coded identifier of a supported messaging event.',
		},
		_category: {
			type: require('./element.schema.js'),
			description: 'The impact of the content of the message.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-significance-category
		category: {
			type: CodeScalar,
			description: 'The impact of the content of the message.',
		},
		_mode: {
			type: require('./element.schema.js'),
			description:
				'The mode of this event declaration - whether an application is a sender or receiver.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-capability-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The mode of this event declaration - whether an application is a sender or receiver.',
		},
		_focus: {
			type: require('./element.schema.js'),
			description:
				'A resource associated with the event.  This is the resource that defines the event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		focus: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A resource associated with the event.  This is the resource that defines the event.',
		},
		request: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CapabilityStatementmessagingeventrequest_request_Union',
					description: 'Information about the request for this event.',
					types: () => [require('./structuredefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'StructureDefinition') {
							return require('./structuredefinition.schema.js');
						}
					},
				}),
			),
			description: 'Information about the request for this event.',
		},
		response: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'CapabilityStatementmessagingeventresponse_response_Union',
					description: 'Information about the response for this event.',
					types: () => [require('./structuredefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'StructureDefinition') {
							return require('./structuredefinition.schema.js');
						}
					},
				}),
			),
			description: 'Information about the response for this event.',
		},
		_documentation: {
			type: require('./element.schema.js'),
			description:
				'Guidance on how this event is handled, such as internal system trigger points, business rules, etc.',
		},
		documentation: {
			type: GraphQLString,
			description:
				'Guidance on how this event is handled, such as internal system trigger points, business rules, etc.',
		},
	}),
});
