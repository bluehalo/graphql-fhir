const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary NutritionOrder.supplement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrderSupplement',
	description: 'Oral nutritional products given in order to add further nutritional value to the patient\'s diet.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supplement-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.'
		},
		productName: {
			type: GraphQLString,
			description: 'The product or brand name of the nutritional supplement such as \'Acme Protein Shake\'.'
		},
		_productName: {
			type: require('./element.schema'),
			description: 'The product or brand name of the nutritional supplement such as \'Acme Protein Shake\'.'
		},
		schedule: {
			type: new GraphQLList(require('./timing.schema')),
			description: 'The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The amount of the nutritional supplement to be given.'
		},
		instruction: {
			type: GraphQLString,
			description: 'Free text or additional instructions or information pertaining to the oral supplement.'
		},
		_instruction: {
			type: require('./element.schema'),
			description: 'Free text or additional instructions or information pertaining to the oral supplement.'
		}
	})
});
