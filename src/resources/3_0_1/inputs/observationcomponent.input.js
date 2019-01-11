const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const TimeScalar = require('../scalars/time.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Observationcomponent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Observationcomponent_Input',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"Describes what was observed. Sometimes this is called the observation 'code'.",
		},
		valueQuantity: {
			type: require('./quantity.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		_valueString: {
			type: require('./element.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueString: {
			type: GraphQLString,
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueRange: {
			type: require('./range.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueRatio: {
			type: require('./ratio.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueSampledData: {
			type: require('./sampleddata.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueAttachment: {
			type: require('./attachment.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		_valueTime: {
			type: require('./element.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueTime: {
			type: TimeScalar,
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		_valueDateTime: {
			type: require('./element.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueDateTime: {
			type: DateTimeScalar,
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valuePeriod: {
			type: require('./period.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-valueabsentreason
		dataAbsentReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'Provides a reason why the expected value in the element Observation.value[x] is missing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-interpretation
		interpretation: {
			type: require('./codeableconcept.input.js'),
			description:
				'The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.',
		},
	}),
});
