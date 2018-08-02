const CodeScalar = require('../scalars/code.scalar');
const TimeScalar = require('../scalars/time.scalar');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const { GraphQLInputObjectType, GraphQLInt, GraphQLFloat, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TimingRepeat Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TimingRepeat_Input',
	description: 'A set of rules that describe when the event is scheduled.',
	fields: () => extendSchema(require('./element.input'), {
		boundsDuration: {
			type: require('./duration.input'),
			description: 'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.'
		},
		boundsRange: {
			type: require('./range.input'),
			description: 'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.'
		},
		boundsPeriod: {
			type: require('./period.input'),
			description: 'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.'
		},
		count: {
			type: GraphQLInt,
			description: 'A total count of the desired number of repetitions.'
		},
		_count: {
			type: require('./element.input'),
			description: 'A total count of the desired number of repetitions.'
		},
		countMax: {
			type: GraphQLInt,
			description: 'A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).'
		},
		_countMax: {
			type: require('./element.input'),
			description: 'A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).'
		},
		duration: {
			type: GraphQLFloat,
			description: 'How long this thing happens for when it happens.'
		},
		_duration: {
			type: require('./element.input'),
			description: 'How long this thing happens for when it happens.'
		},
		durationMax: {
			type: GraphQLFloat,
			description: 'The upper limit of how long this thing happens for when it happens.'
		},
		_durationMax: {
			type: require('./element.input'),
			description: 'The upper limit of how long this thing happens for when it happens.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		durationUnit: {
			type: CodeScalar,
			description: 'The units of time for the duration, in UCUM units.'
		},
		_durationUnit: {
			type: require('./element.input'),
			description: 'The units of time for the duration, in UCUM units.'
		},
		frequency: {
			type: GraphQLInt,
			description: 'The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).'
		},
		_frequency: {
			type: require('./element.input'),
			description: 'The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).'
		},
		frequencyMax: {
			type: GraphQLInt,
			description: 'If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.'
		},
		_frequencyMax: {
			type: require('./element.input'),
			description: 'If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.'
		},
		period: {
			type: GraphQLFloat,
			description: 'Indicates the duration of time over which repetitions are to occur; e.g. to express \'3 times per day\', 3 would be the frequency and \'1 day\' would be the period.'
		},
		_period: {
			type: require('./element.input'),
			description: 'Indicates the duration of time over which repetitions are to occur; e.g. to express \'3 times per day\', 3 would be the frequency and \'1 day\' would be the period.'
		},
		periodMax: {
			type: GraphQLFloat,
			description: 'If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \'do this once every 3-5 days.'
		},
		_periodMax: {
			type: require('./element.input'),
			description: 'If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \'do this once every 3-5 days.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		periodUnit: {
			type: CodeScalar,
			description: 'The units of time for the period in UCUM units.'
		},
		_periodUnit: {
			type: require('./element.input'),
			description: 'The units of time for the period in UCUM units.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/days-of-week
		dayOfWeek: {
			type: new GraphQLList(CodeScalar),
			description: 'If one or more days of week is provided, then the action happens only on the specified day(s).'
		},
		_dayOfWeek: {
			type: require('./element.input'),
			description: 'If one or more days of week is provided, then the action happens only on the specified day(s).'
		},
		timeOfDay: {
			type: new GraphQLList(TimeScalar),
			description: 'Specified time of day for action to take place.'
		},
		_timeOfDay: {
			type: require('./element.input'),
			description: 'Specified time of day for action to take place.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/event-timing
		when: {
			type: new GraphQLList(CodeScalar),
			description: 'Real world events that the occurrence of the event should be tied to.'
		},
		_when: {
			type: require('./element.input'),
			description: 'Real world events that the occurrence of the event should be tied to.'
		},
		offset: {
			type: UnsignedIntScalar,
			description: 'The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.'
		},
		_offset: {
			type: require('./element.input'),
			description: 'The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.'
		}
	})
});
