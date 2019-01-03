const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLInt, GraphQLFloat } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Timing.repeat Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TimingRepeat_Input',
	description: 'A set of rules that describe when the event should occur.',
	fields: () => extendSchema(require('./element.input'), {
		boundsQuantity: {
			type: require('./quantity.input'),
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
		// ValueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		durationUnits: {
			type: CodeScalar,
			description: 'The units of time for the duration, in UCUM units.'
		},
		_durationUnits: {
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
			description: 'If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.'
		},
		_frequencyMax: {
			type: require('./element.input'),
			description: 'If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.'
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
		// ValueSetReference: http://hl7.org/fhir/ValueSet/units-of-time
		periodUnits: {
			type: CodeScalar,
			description: 'The units of time for the period in UCUM units.'
		},
		_periodUnits: {
			type: require('./element.input'),
			description: 'The units of time for the period in UCUM units.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/event-timing
		when: {
			type: CodeScalar,
			description: 'A real world event that the occurrence of the event should be tied to.'
		},
		_when: {
			type: require('./element.input'),
			description: 'A real world event that the occurrence of the event should be tied to.'
		}
	})
});
