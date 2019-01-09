const {
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Timingrepeat Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Timingrepeat_Input',
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
		boundsQuantity: {
			type: require('./quantity.input.js'),
			description:
				'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.',
		},
		boundsRange: {
			type: require('./range.input.js'),
			description:
				'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.',
		},
		boundsPeriod: {
			type: require('./period.input.js'),
			description:
				'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.',
		},
		_count: {
			type: require('./element.input.js'),
			description: 'A total count of the desired number of repetitions.',
		},
		count: {
			type: GraphQLInt,
			description: 'A total count of the desired number of repetitions.',
		},
		_duration: {
			type: require('./element.input.js'),
			description: 'How long this thing happens for when it happens.',
		},
		duration: {
			type: GraphQLFloat,
			description: 'How long this thing happens for when it happens.',
		},
		_durationMax: {
			type: require('./element.input.js'),
			description:
				'The upper limit of how long this thing happens for when it happens.',
		},
		durationMax: {
			type: GraphQLFloat,
			description:
				'The upper limit of how long this thing happens for when it happens.',
		},
		_durationUnits: {
			type: require('./element.input.js'),
			description: 'The units of time for the duration, in UCUM units.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		durationUnits: {
			type: CodeScalar,
			description: 'The units of time for the duration, in UCUM units.',
		},
		_frequency: {
			type: require('./element.input.js'),
			description:
				'The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).',
		},
		frequency: {
			type: GraphQLInt,
			description:
				'The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).',
		},
		_frequencyMax: {
			type: require('./element.input.js'),
			description:
				'If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.',
		},
		frequencyMax: {
			type: GraphQLInt,
			description:
				'If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.',
		},
		_period: {
			type: require('./element.input.js'),
			description:
				"Indicates the duration of time over which repetitions are to occur; e.g. to express '3 times per day', 3 would be the frequency and '1 day' would be the period.",
		},
		period: {
			type: GraphQLFloat,
			description:
				"Indicates the duration of time over which repetitions are to occur; e.g. to express '3 times per day', 3 would be the frequency and '1 day' would be the period.",
		},
		_periodMax: {
			type: require('./element.input.js'),
			description:
				"If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as 'do this once every 3-5 days.",
		},
		periodMax: {
			type: GraphQLFloat,
			description:
				"If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as 'do this once every 3-5 days.",
		},
		_periodUnits: {
			type: require('./element.input.js'),
			description: 'The units of time for the period in UCUM units.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		periodUnits: {
			type: CodeScalar,
			description: 'The units of time for the period in UCUM units.',
		},
		_when: {
			type: require('./element.input.js'),
			description:
				'A real world event that the occurrence of the event should be tied to.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-timing
		when: {
			type: CodeScalar,
			description:
				'A real world event that the occurrence of the event should be tied to.',
		},
	}),
});
