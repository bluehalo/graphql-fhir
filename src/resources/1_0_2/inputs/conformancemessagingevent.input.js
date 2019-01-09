const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Conformancemessagingevent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Conformancemessagingevent_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-events
		code: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description: 'A coded identifier of a supported messaging event.',
		},
		_category: {
			type: require('./element.input.js'),
			description: 'The impact of the content of the message.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-significance-category
		category: {
			type: CodeScalar,
			description: 'The impact of the content of the message.',
		},
		_mode: {
			type: require('./element.input.js'),
			description:
				'The mode of this event declaration - whether application is sender or receiver.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/message-conformance-event-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The mode of this event declaration - whether application is sender or receiver.',
		},
		_focus: {
			type: require('./element.input.js'),
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
			type: new GraphQLNonNull(GraphQLString),
			description: 'Information about the request for this event.',
		},
		response: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Information about the response for this event.',
		},
		_documentation: {
			type: require('./element.input.js'),
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
