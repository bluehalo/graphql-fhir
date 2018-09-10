const TimeScalar = require('../scalars/time.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Observation.component Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ObservationComponent',
	description: 'Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Describes what was observed. Sometimes this is called the observation \'code\'.'
		},
		valueQuantity: {
			type: require('./quantity.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueString: {
			type: GraphQLString,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueRange: {
			type: require('./range.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueRatio: {
			type: require('./ratio.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueSampledData: {
			type: require('./sampleddata.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueAttachment: {
			type: require('./attachment.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueTime: {
			type: TimeScalar,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueTime: {
			type: require('./element.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		_valueDateTime: {
			type: require('./element.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		valuePeriod: {
			type: require('./period.schema'),
			description: 'The information determined as a result of making the observation, if the information has a simple value.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-valueabsentreason
		dataAbsentReason: {
			type: require('./codeableconcept.schema'),
			description: 'Provides a reason why the expected value in the element Observation.value[x] is missing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-interpretation
		interpretation: {
			type: require('./codeableconcept.schema'),
			description: 'The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.'
		}
	})
});
