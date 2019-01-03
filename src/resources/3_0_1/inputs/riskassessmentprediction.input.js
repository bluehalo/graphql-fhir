const { GraphQLInputObjectType, GraphQLNonNull, GraphQLFloat, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary RiskAssessment.prediction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RiskAssessmentPrediction_Input',
	description: 'Describes the expected outcome for the subject.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		outcome: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).'
		},
		probabilityDecimal: {
			type: GraphQLFloat,
			description: 'How likely is the outcome (in the specified timeframe).'
		},
		_probabilityDecimal: {
			type: require('./element.input'),
			description: 'How likely is the outcome (in the specified timeframe).'
		},
		probabilityRange: {
			type: require('./range.input'),
			description: 'How likely is the outcome (in the specified timeframe).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/risk-probability
		qualitativeRisk: {
			type: require('./codeableconcept.input'),
			description: 'How likely is the outcome (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, high).'
		},
		relativeRisk: {
			type: GraphQLFloat,
			description: 'Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).'
		},
		_relativeRisk: {
			type: require('./element.input'),
			description: 'Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).'
		},
		whenPeriod: {
			type: require('./period.input'),
			description: 'Indicates the period of time or age range of the subject to which the specified probability applies.'
		},
		whenRange: {
			type: require('./range.input'),
			description: 'Indicates the period of time or age range of the subject to which the specified probability applies.'
		},
		rationale: {
			type: GraphQLString,
			description: 'Additional information explaining the basis for the prediction.'
		},
		_rationale: {
			type: require('./element.input'),
			description: 'Additional information explaining the basis for the prediction.'
		}
	})
});
