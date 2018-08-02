const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationProductIngredient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationProductIngredient',
	description: 'Identifies a particular constituent of interest in the product.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		item: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The actual ingredient - either a substance (simple ingredient) or another medication.'
		},
		amount: {
			type: require('./ratio.schema'),
			description: 'Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.'
		}
	})
});
