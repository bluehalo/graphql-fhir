const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary NutritionOrderOralDietNutrient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderOralDietNutrient_Input',
	description: 'Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/nutrient-code
		modifier: {
			type: require('./codeableconcept.input'),
			description: 'The nutrient that is being modified such as carbohydrate or sodium.'
		},
		amount: {
			type: require('./quantity.input'),
			description: 'The quantity of the specified nutrient to include in diet.'
		}
	})
});
