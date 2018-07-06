const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLFloat,
	GraphQLList,
	GraphQLInt
} = require('graphql');

// Scalars
const UnsignedIntScalar = require('../scalars/unsignedint.scalar');
const TimeScalar = require('../scalars/time.scalar');
const CodeScalar = require('../scalars/code.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

let TimingRepeatDurationUnitType = new GraphQLEnumType({
	name: 'TimingRepeatDurationUnitTypeInput',
	values: {
		s: { value: 's' },
		min: { value: 'min' },
		h: { value: 'h' },
		d: { value: 'd' },
		wk: { value: 'wk' },
		mo: { value: 'mo' },
		a: { value: 'a' }
	}
});

let TimingRepeatPeriodUnitType = new GraphQLEnumType({
	name: 'TimingRepeatPeriodUnitTypeInput',
	values: {
		s: { value: 's' },
		min: { value: 'min' },
		h: { value: 'h' },
		d: { value: 'd' },
		wk: { value: 'wk' },
		mo: { value: 'mo' },
		a: { value: 'a' }
	}
});

let TimingRepeatDayOfWeekType = new GraphQLEnumType({
	name: 'TimingRepeatDayOfWeekTypeInput',
	values: {
		mon: { value: 'mon' },
		tue: { value: 'tue' },
		wed: { value: 'wed' },
		thu: { value: 'thu' },
		fri: { value: 'fri' },
		sat: { value: 'sat' },
		sun: { value: 'sun' }
	}
});

/**
 * @name exports
 * @summary TimingRepeat Fields
 */
let TimingRepeatInput = new GraphQLInputObjectType({
	name: 'TimingRepeatInput',
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
			type: require('./extension.input'),
			description: 'Extensions for count'
		},
		countMax: {
			type: GraphQLInt,
			description: 'A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).'
		},
		_countMax: {
			type: require('./extension.input'),
			description: 'Extensions for countMax'
		},
		duration: {
			type: GraphQLFloat,
			description: 'How long this thing happens for when it happens.'
		},
		_duration: {
			type: require('./extension.input'),
			description: 'Extensions for duration'
		},
		durationMax: {
			type: GraphQLFloat,
			description: 'The upper limit of how long this thing happens for when it happens.'
		},
		_durationMax: {
			type: require('./extension.input'),
			description: 'Extensions for durationMax'
		},
		durationUnit: {
			type: TimingRepeatDurationUnitType,
			description: 'The units of time for the duration, in UCUM units.'
		},
		_durationUnit: {
			type: require('./extension.input'),
			description: 'Extensions for durationUnit'
		},
		frequency: {
			type: GraphQLInt,
			description: 'The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).'
		},
		_frequency: {
			type: require('./extension.input'),
			description: 'Extensions for frequency'
		},
		frequencyMax: {
			type: GraphQLInt,
			description: 'If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.'
		},
		_frequencyMax: {
			type: require('./extension.input'),
			description: 'Extensions for frequencyMax'
		},
		period: {
			type: GraphQLFloat,
			description: 'Indicates the duration of time over which repetitions are to occur; e.g. to express \"3 times per day\", 3 would be the frequency and \"1 day\" would be the period.'
		},
		_period: {
			type: require('./extension.input'),
			description: 'Extensions for period'
		},
		periodMax: {
			type: GraphQLFloat,
			description: 'If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \"do this once every 3-5 days.'
		},
		_periodMax: {
			type: require('./extension.input'),
			description: 'Extensions for periodMax'
		},
		periodUnit: {
			type: TimingRepeatPeriodUnitType,
			description: 'The units of time for the period in UCUM units.'
		},
		_periodUnit: {
			type: require('./extension.input'),
			description: 'Extensions for periodUnit'
		},
		dayOfWeek: {
			type: new GraphQLList(TimingRepeatDayOfWeekType),
			description: 'If one or more days of week is provided, then the action happens only on the specified day(s).'
		},
		_dayOfWeek: {
			type: require('./extension.input'),
			description: 'Extensions for dayOfWeek'
		},
		timeOfDay: {
			type: new GraphQLList(TimeScalar),
			description: 'Specified time of day for action to take place.'
		},
		_timeOfDay: {
			type: require('./extension.input'),
			description: 'Extensions for timeOfDay'
		},
		when: {
			type: new GraphQLList(CodeScalar),
			description: 'Real world events that the occurrence of the event should be tied to.'
		},
		_when: {
			type: require('./extension.input'),
			description: 'Extensions for when'
		},
		offset: {
			type: UnsignedIntScalar,
			description: 'The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.'
		},
		_offset: {
			type: require('./extension.input'),
			description: 'Extensions for offset'
		}
	})
});

module.exports = TimingRepeatInput;
