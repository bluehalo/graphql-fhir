const TimeScalar = require('../scalars/time.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Observation.component Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ObservationComponent_Input',
	description:
		'Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
			code: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description:
					"Describes what was observed. Sometimes this is called the observation 'code'.",
			},
			valueQuantity: {
				type: require('./quantity.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueCodeableConcept: {
				type: require('./codeableconcept.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueString: {
				type: GraphQLString,
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			_valueString: {
				type: require('./element.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueRange: {
				type: require('./range.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueRatio: {
				type: require('./ratio.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueSampledData: {
				type: require('./sampleddata.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueAttachment: {
				type: require('./attachment.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueTime: {
				type: TimeScalar,
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			_valueTime: {
				type: require('./element.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valueDateTime: {
				type: DateTimeScalar,
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			_valueDateTime: {
				type: require('./element.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			valuePeriod: {
				type: require('./period.input'),
				description:
					'The information determined as a result of making the observation, if the information has a simple value.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-valueabsentreason
			dataAbsentReason: {
				type: require('./codeableconcept.input'),
				description:
					'Provides a reason why the expected value in the element Observation.value[x] is missing.',
			},
		}),
});
