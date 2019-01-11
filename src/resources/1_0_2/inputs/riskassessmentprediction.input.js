const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary RiskAssessmentprediction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RiskAssessmentprediction_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		outcome: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).',
		},
		_probabilityDecimal: {
			type: require('./element.input.js'),
			description: 'How likely is the outcome (in the specified timeframe).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/risk-probability
		probabilityDecimal: {
			type: GraphQLFloat,
			description: 'How likely is the outcome (in the specified timeframe).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/risk-probability
		probabilityRange: {
			type: require('./range.input.js'),
			description: 'How likely is the outcome (in the specified timeframe).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/risk-probability
		probabilityCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description: 'How likely is the outcome (in the specified timeframe).',
		},
		_relativeRisk: {
			type: require('./element.input.js'),
			description:
				'Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).',
		},
		relativeRisk: {
			type: GraphQLFloat,
			description:
				'Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).',
		},
		whenPeriod: {
			type: require('./period.input.js'),
			description:
				'Indicates the period of time or age range of the subject to which the specified probability applies.',
		},
		whenRange: {
			type: require('./range.input.js'),
			description:
				'Indicates the period of time or age range of the subject to which the specified probability applies.',
		},
		_rationale: {
			type: require('./element.input.js'),
			description:
				'Additional information explaining the basis for the prediction.',
		},
		rationale: {
			type: GraphQLString,
			description:
				'Additional information explaining the basis for the prediction.',
		},
	}),
});
