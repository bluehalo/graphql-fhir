const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Goaltarget Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Goaltarget',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-codes
		measure: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.',
		},
		detailQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.',
		},
		detailRange: {
			type: require('./range.schema.js'),
			description:
				'The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.',
		},
		detailCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150 pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any focus value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any focus value at or above the low value.',
		},
		_dueDate: {
			type: require('./element.schema.js'),
			description:
				'Indicates either the date or the duration after start by which the goal should be met.',
		},
		dueDate: {
			type: DateScalar,
			description:
				'Indicates either the date or the duration after start by which the goal should be met.',
		},
		dueDuration: {
			type: require('./duration.schema.js'),
			description:
				'Indicates either the date or the duration after start by which the goal should be met.',
		},
	}),
});
