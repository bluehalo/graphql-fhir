const {
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Timingrepeat Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Timingrepeat',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		boundsDuration: {
			type: require('./duration.schema.js'),
			description:
				'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.',
		},
		boundsRange: {
			type: require('./range.schema.js'),
			description:
				'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.',
		},
		boundsPeriod: {
			type: require('./period.schema.js'),
			description:
				'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.',
		},
		_count: {
			type: require('./element.schema.js'),
			description:
				'A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.',
		},
		count: {
			type: PositiveIntScalar,
			description:
				'A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.',
		},
		_countMax: {
			type: require('./element.schema.js'),
			description:
				'If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.',
		},
		countMax: {
			type: PositiveIntScalar,
			description:
				'If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.',
		},
		_duration: {
			type: require('./element.schema.js'),
			description:
				'How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.',
		},
		duration: {
			type: GraphQLFloat,
			description:
				'How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.',
		},
		_durationMax: {
			type: require('./element.schema.js'),
			description:
				'If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.',
		},
		durationMax: {
			type: GraphQLFloat,
			description:
				'If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.',
		},
		_durationUnit: {
			type: require('./element.schema.js'),
			description: 'The units of time for the duration, in UCUM units.',
		},
		durationUnit: {
			type: CodeScalar,
			description: 'The units of time for the duration, in UCUM units.',
		},
		_frequency: {
			type: require('./element.schema.js'),
			description:
				'The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.',
		},
		frequency: {
			type: PositiveIntScalar,
			description:
				'The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.',
		},
		_frequencyMax: {
			type: require('./element.schema.js'),
			description:
				'If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.',
		},
		frequencyMax: {
			type: PositiveIntScalar,
			description:
				'If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.',
		},
		_period: {
			type: require('./element.schema.js'),
			description:
				"Indicates the duration of time over which repetitions are to occur; e.g. to express '3 times per day', 3 would be the frequency and '1 day' would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.",
		},
		period: {
			type: GraphQLFloat,
			description:
				"Indicates the duration of time over which repetitions are to occur; e.g. to express '3 times per day', 3 would be the frequency and '1 day' would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.",
		},
		_periodMax: {
			type: require('./element.schema.js'),
			description:
				"If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as 'do this once every 3-5 days.",
		},
		periodMax: {
			type: GraphQLFloat,
			description:
				"If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as 'do this once every 3-5 days.",
		},
		_periodUnit: {
			type: require('./element.schema.js'),
			description: 'The units of time for the period in UCUM units.',
		},
		periodUnit: {
			type: CodeScalar,
			description: 'The units of time for the period in UCUM units.',
		},
		_dayOfWeek: {
			type: require('./element.schema.js'),
			description:
				'If one or more days of week is provided, then the action happens only on the specified day(s).',
		},
		dayOfWeek: {
			type: new GraphQLList(CodeScalar),
			description:
				'If one or more days of week is provided, then the action happens only on the specified day(s).',
		},
		_timeOfDay: {
			type: require('./element.schema.js'),
			description: 'Specified time of day for action to take place.',
		},
		timeOfDay: {
			type: new GraphQLList(TimeScalar),
			description: 'Specified time of day for action to take place.',
		},
		_when: {
			type: require('./element.schema.js'),
			description:
				'An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.',
		},
		when: {
			type: new GraphQLList(CodeScalar),
			description:
				'An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.',
		},
		_offset: {
			type: require('./element.schema.js'),
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
