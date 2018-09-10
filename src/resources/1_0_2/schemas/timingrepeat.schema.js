const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLInt, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Timing.repeat Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TimingRepeat',
	description: 'A set of rules that describe when the event should occur.',
	fields: () => extendSchema(require('./element.schema'), {
		boundsQuantity: {
			type: require('./quantity.schema'),
			description: 'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.'
		},
		boundsRange: {
			type: require('./range.schema'),
			description: 'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.'
		},
		boundsPeriod: {
			type: require('./period.schema'),
			description: 'Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.'
		},
		count: {
			type: GraphQLInt,
			description: 'A total count of the desired number of repetitions.'
		},
		_count: {
			type: require('./element.schema'),
			description: 'A total count of the desired number of repetitions.'
		},
		duration: {
			type: GraphQLFloat,
			description: 'How long this thing happens for when it happens.'
		},
		_duration: {
			type: require('./element.schema'),
			description: 'How long this thing happens for when it happens.'
		},
		durationMax: {
			type: GraphQLFloat,
			description: 'The upper limit of how long this thing happens for when it happens.'
		},
		_durationMax: {
			type: require('./element.schema'),
			description: 'The upper limit of how long this thing happens for when it happens.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		durationUnits: {
			type: CodeScalar,
			description: 'The units of time for the duration, in UCUM units.'
		},
		_durationUnits: {
			type: require('./element.schema'),
			description: 'The units of time for the duration, in UCUM units.'
		},
		frequency: {
			type: GraphQLInt,
			description: 'The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).'
		},
		_frequency: {
			type: require('./element.schema'),
			description: 'The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).'
		},
		frequencyMax: {
			type: GraphQLInt,
			description: 'If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.'
		},
		_frequencyMax: {
			type: require('./element.schema'),
			description: 'If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.'
		},
		period: {
			type: GraphQLFloat,
			description: 'Indicates the duration of time over which repetitions are to occur; e.g. to express \'3 times per day\', 3 would be the frequency and \'1 day\' would be the period.'
		},
		_period: {
			type: require('./element.schema'),
			description: 'Indicates the duration of time over which repetitions are to occur; e.g. to express \'3 times per day\', 3 would be the frequency and \'1 day\' would be the period.'
		},
		periodMax: {
			type: GraphQLFloat,
			description: 'If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \'do this once every 3-5 days.'
		},
		_periodMax: {
			type: require('./element.schema'),
			description: 'If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \'do this once every 3-5 days.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		periodUnits: {
			type: CodeScalar,
			description: 'The units of time for the period in UCUM units.'
		},
		_periodUnits: {
			type: require('./element.schema'),
			description: 'The units of time for the period in UCUM units.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/event-timing
		when: {
			type: CodeScalar,
			description: 'A real world event that the occurrence of the event should be tied to.'
		},
		_when: {
			type: require('./element.schema'),
			description: 'A real world event that the occurrence of the event should be tied to.'
		}
	})
});
