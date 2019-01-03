const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary NutritionOrder.oralDiet.texture Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrderOralDietTexture',
	description:
		'Class that describes any texture modifications required for the patient to safely consume various types of solid foods.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/texture-code
			modifier: {
				type: require('./codeableconcept.schema'),
				description:
					'Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/modified-foodtype
			foodType: {
				type: require('./codeableconcept.schema'),
				description:
					'The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types.',
			},
		}),
});
