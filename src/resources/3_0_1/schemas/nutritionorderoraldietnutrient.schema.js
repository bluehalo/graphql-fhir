const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary NutritionOrderOralDietNutrient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrderOralDietNutrient',
	description: 'Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/nutrient-code
		modifier: {
			type: require('./codeableconcept.schema'),
			description: 'The nutrient that is being modified such as carbohydrate or sodium.'
		},
		amount: {
			type: require('./quantity.schema'),
			description: 'The quantity of the specified nutrient to include in diet.'
		}
	})
});
