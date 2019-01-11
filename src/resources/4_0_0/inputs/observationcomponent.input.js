const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInt,
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
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
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
		_valueBoolean: {
			type: require('./element.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		_valueInteger: {
			type: require('./element.input.js'),
			description:
				'The information determined as a result of making the observation, if the information has a simple value.',
		},
		valueInteger: {
			type: GraphQLInt,
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
		dataAbsentReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'Provides a reason why the expected value in the element Observation.component.value[x] is missing.',
		},
		interpretation: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A categorical assessment of an observation value.  For example, high, low, normal.',
		},
	}),
});
