const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ConformanceMessagingEvent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceMessagingEvent_Input',
	description: 'A description of the solution\'s support for an event at this end-point.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/message-events
		code: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'A coded identifier of a supported messaging event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/message-significance-category
		category: {
			type: CodeScalar,
			description: 'The impact of the content of the message.'
		},
		_category: {
			type: require('./element.input'),
			description: 'The impact of the content of the message.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/message-conformance-event-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The mode of this event declaration - whether application is sender or receiver.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'The mode of this event declaration - whether application is sender or receiver.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		focus: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A resource associated with the event.  This is the resource that defines the event.'
		},
		_focus: {
			type: require('./element.input'),
			description: 'A resource associated with the event.  This is the resource that defines the event.'
		},
		request: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Information about the request for this event.'
		},
		response: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Information about the response for this event.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Guidance on how this event is handled, such as internal system trigger points, business rules, etc.'
		},
		_documentation: {
			type: require('./element.input'),
			description: 'Guidance on how this event is handled, such as internal system trigger points, business rules, etc.'
		}
	})
});
