const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MedicationIngredient Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationIngredient',
	description: 'Identifies a particular constituent of interest in the product.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		itemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The actual ingredient - either a substance (simple ingredient) or another medication.'
		},
		itemReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The actual ingredient - either a substance (simple ingredient) or another medication.'
		},
		isActive: {
			type: GraphQLBoolean,
			description: 'Indication of whether this ingredient affects the therapeutic action of the drug.'
		},
		_isActive: {
			type: require('./element.schema'),
			description: 'Indication of whether this ingredient affects the therapeutic action of the drug.'
		},
		amount: {
			type: require('./ratio.schema'),
			description: 'Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.'
		}
	})
});
