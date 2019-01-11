const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

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
		boundsDuration: {
			type: require('./duration.input.js'),
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
		_countMax: {
			type: require('./element.input.js'),
			description:
				'A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).',
		},
		countMax: {
			type: GraphQLInt,
			description:
				'A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).',
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
		_durationUnit: {
			type: require('./element.input.js'),
			description: 'The units of time for the duration, in UCUM units.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		durationUnit: {
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
				'If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.',
		},
		frequencyMax: {
			type: GraphQLInt,
			description:
				'If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.',
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
		_periodUnit: {
			type: require('./element.input.js'),
			description: 'The units of time for the period in UCUM units.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		periodUnit: {
			type: CodeScalar,
			description: 'The units of time for the period in UCUM units.',
		},
		_dayOfWeek: {
			type: require('./element.input.js'),
			description:
				'If one or more days of week is provided, then the action happens only on the specified day(s).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/days-of-week
		dayOfWeek: {
			type: new GraphQLList(CodeScalar),
			description:
				'If one or more days of week is provided, then the action happens only on the specified day(s).',
		},
		_timeOfDay: {
			type: require('./element.input.js'),
			description: 'Specified time of day for action to take place.',
		},
		timeOfDay: {
			type: new GraphQLList(TimeScalar),
			description: 'Specified time of day for action to take place.',
		},
		_when: {
			type: require('./element.input.js'),
			description:
				'Real world events that the occurrence of the event should be tied to.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/event-timing
		when: {
			type: new GraphQLList(CodeScalar),
			description:
				'Real world events that the occurrence of the event should be tied to.',
		},
		_offset: {
			type: require('./element.input.js'),
			description:
				'The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.',
		},
		offset: {
			type: UnsignedIntScalar,
			description:
				'The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.',
		},
	}),
});
