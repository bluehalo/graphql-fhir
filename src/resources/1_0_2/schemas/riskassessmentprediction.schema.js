const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary RiskAssessment.prediction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RiskAssessmentPrediction',
	description: 'Describes the expected outcome for the subject.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		outcome: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/risk-probability
		probabilityDecimal: {
			type: GraphQLFloat,
			description: 'How likely is the outcome (in the specified timeframe).'
		},
		_probabilityDecimal: {
			type: require('./element.schema'),
			description: 'How likely is the outcome (in the specified timeframe).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/risk-probability
		probabilityRange: {
			type: require('./range.schema'),
			description: 'How likely is the outcome (in the specified timeframe).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/risk-probability
		probabilityCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'How likely is the outcome (in the specified timeframe).'
		},
		relativeRisk: {
			type: GraphQLFloat,
			description: 'Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).'
		},
		_relativeRisk: {
			type: require('./element.schema'),
			description: 'Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).'
		},
		whenPeriod: {
			type: require('./period.schema'),
			description: 'Indicates the period of time or age range of the subject to which the specified probability applies.'
		},
		whenRange: {
			type: require('./range.schema'),
			description: 'Indicates the period of time or age range of the subject to which the specified probability applies.'
		},
		rationale: {
			type: GraphQLString,
			description: 'Additional information explaining the basis for the prediction.'
		},
		_rationale: {
			type: require('./element.schema'),
			description: 'Additional information explaining the basis for the prediction.'
		}
	})
});
