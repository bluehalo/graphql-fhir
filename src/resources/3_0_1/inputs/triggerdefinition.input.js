const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary TriggerDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TriggerDefinition_Input',
	description: 'Base StructureDefinition for TriggerDefinition Type',
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
		_type: {
			type: require('./element.input.js'),
			description: 'The type of triggering event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/trigger-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of triggering event.',
		},
		_eventName: {
			type: require('./element.input.js'),
			description: 'The name of the event (if this is a named-event trigger).',
		},
		eventName: {
			type: GraphQLString,
			description: 'The name of the event (if this is a named-event trigger).',
		},
		eventTimingTiming: {
			type: require('./timing.input.js'),
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventTimingReference: {
			type: GraphQLString,
			description: 'The timing of the event (if this is a period trigger).',
		},
		_eventTimingDate: {
			type: require('./element.input.js'),
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventTimingDate: {
			type: DateScalar,
			description: 'The timing of the event (if this is a period trigger).',
		},
		_eventTimingDateTime: {
			type: require('./element.input.js'),
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventTimingDateTime: {
			type: DateTimeScalar,
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventData: {
			type: require('./datarequirement.input.js'),
			description:
				'The triggering data of the event (if this is a data trigger).',
		},
	}),
});
