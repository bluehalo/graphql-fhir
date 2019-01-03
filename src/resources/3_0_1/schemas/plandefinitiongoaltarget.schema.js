const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary PlanDefinition.goal.target Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PlanDefinitionGoalTarget',
	description: 'Indicates what should be done and within what timeframe.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
			measure: {
				type: require('./codeableconcept.schema'),
				description:
					'The parameter whose value is to be tracked, e.g. body weigth, blood pressure, or hemoglobin A1c level.',
			},
			detailQuantity: {
				type: require('./quantity.schema'),
				description:
					'The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.',
			},
			detailRange: {
				type: require('./range.schema'),
				description:
					'The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.',
			},
			detailCodeableConcept: {
				type: require('./codeableconcept.schema'),
				description:
					'The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.',
			},
			due: {
				type: require('./duration.schema'),
				description:
					'Indicates the timeframe after the start of the goal in which the goal should be met.',
			},
		}),
});
