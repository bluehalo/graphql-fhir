const {
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');

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
		outcome: {
			type: require('./codeableconcept.input.js'),
			description:
				'One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).',
		},
		_probabilityDecimal: {
			type: require('./element.input.js'),
			description:
				'Indicates how likely the outcome is (in the specified timeframe).',
		},
		probabilityDecimal: {
			type: GraphQLFloat,
			description:
				'Indicates how likely the outcome is (in the specified timeframe).',
		},
		probabilityRange: {
			type: require('./range.input.js'),
			description:
				'Indicates how likely the outcome is (in the specified timeframe).',
		},
		qualitativeRisk: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).',
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
