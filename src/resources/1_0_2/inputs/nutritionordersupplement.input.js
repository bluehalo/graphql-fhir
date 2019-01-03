const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary NutritionOrder.supplement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NutritionOrderSupplement_Input',
	description:
		"Oral nutritional products given in order to add further nutritional value to the patient's diet.",
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/supplement-type
			type: {
				type: require('./codeableconcept.input'),
				description:
					'The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.',
			},
			productName: {
				type: GraphQLString,
				description:
					"The product or brand name of the nutritional supplement such as 'Acme Protein Shake'.",
			},
			_productName: {
				type: require('./element.input'),
				description:
					"The product or brand name of the nutritional supplement such as 'Acme Protein Shake'.",
			},
			schedule: {
				type: new GraphQLList(require('./timing.input')),
				description:
					'The time period and frequency at which the supplement(s) should be given.',
			},
			quantity: {
				type: require('./quantity.input'),
				description: 'The amount of the nutritional supplement to be given.',
			},
			instruction: {
				type: GraphQLString,
				description:
					'Free text or additional instructions or information pertaining to the oral supplement.',
			},
			_instruction: {
				type: require('./element.input'),
				description:
					'Free text or additional instructions or information pertaining to the oral supplement.',
			},
		}),
});
