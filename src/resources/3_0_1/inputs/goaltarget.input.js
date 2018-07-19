const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary GoalTarget Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GoalTarget_Input',
	description: 'Indicates what should be done by when.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		measure: {
			type: require('./codeableconcept.input'),
			description: 'The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.'
		},
		detailQuantity: {
			type: require('./quantity.input'),
			description: 'The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.'
		},
		detailRange: {
			type: require('./range.input'),
			description: 'The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.'
		},
		detailCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.'
		},
		dueDate: {
			type: DateScalar,
			description: 'Indicates either the date or the duration after start by which the goal should be met.'
		},
		_dueDate: {
			type: require('./element.input'),
			description: 'Indicates either the date or the duration after start by which the goal should be met.'
		},
		dueDuration: {
			type: require('./duration.input'),
			description: 'Indicates either the date or the duration after start by which the goal should be met.'
		}
	})
});
