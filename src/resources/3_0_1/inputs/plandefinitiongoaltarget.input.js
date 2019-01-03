const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary PlanDefinition.goal.target Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PlanDefinitionGoalTarget_Input',
	description: 'Indicates what should be done and within what timeframe.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
			measure: {
				type: require('./codeableconcept.input'),
				description:
					'The parameter whose value is to be tracked, e.g. body weigth, blood pressure, or hemoglobin A1c level.',
			},
			detailQuantity: {
				type: require('./quantity.input'),
				description:
					'The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.',
			},
			detailRange: {
				type: require('./range.input'),
				description:
					'The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.',
			},
			detailCodeableConcept: {
				type: require('./codeableconcept.input'),
				description:
					'The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.',
			},
			due: {
				type: require('./duration.input'),
				description:
					'Indicates the timeframe after the start of the goal in which the goal should be met.',
			},
		}),
});
