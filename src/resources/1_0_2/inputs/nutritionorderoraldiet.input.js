const {
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary NutritionOrder.oralDiet Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderOralDiet_Input',
	description: 'Diet given orally in contrast to enteral (tube) feeding.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/diet-type
			type: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.',
			},
			schedule: {
				type: new GraphQLList(require('./timing.input')),
				description:
					'The time period and frequency at which the diet should be given.',
			},
			nutrient: {
				type: new GraphQLList(
					require('./nutritionorderoraldietnutrient.input'),
				),
				description:
					'Class that defines the quantity and type of nutrient modifications required for the oral diet.',
			},
			texture: {
				type: new GraphQLList(require('./nutritionorderoraldiettexture.input')),
				description:
					'Class that describes any texture modifications required for the patient to safely consume various types of solid foods.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/consistency-type
			fluidConsistencyType: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.',
			},
			instruction: {
				type: GraphQLString,
				description:
					'Free text or additional instructions or information pertaining to the oral diet.',
			},
			_instruction: {
				type: require('./element.input'),
				description:
					'Free text or additional instructions or information pertaining to the oral diet.',
			},
		}),
});
