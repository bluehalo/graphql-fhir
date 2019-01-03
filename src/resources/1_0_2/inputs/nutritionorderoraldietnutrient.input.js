const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary NutritionOrder.oralDiet.nutrient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderOralDietNutrient_Input',
	description:
		'Class that defines the quantity and type of nutrient modifications required for the oral diet.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/nutrient-code
			modifier: {
				type: require('./codeableconcept.input'),
				description:
					'The nutrient that is being modified such as carbohydrate or sodium.',
			},
			amount: {
				type: require('./quantity.input'),
				description:
					'The quantity of the specified nutrient to include in diet.',
			},
		}),
});
