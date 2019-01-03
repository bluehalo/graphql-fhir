const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary NutritionOrder.oralDiet.texture Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderOralDietTexture_Input',
	description:
		'Class that describes any texture modifications required for the patient to safely consume various types of solid foods.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/texture-code
			modifier: {
				type: require('./codeableconcept.input'),
				description:
					'Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/modified-foodtype
			foodType: {
				type: require('./codeableconcept.input'),
				description:
					'The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.',
			},
		}),
});
