const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLBoolean,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Medication.ingredient Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationIngredient_Input',
	description:
		'Identifies a particular constituent of interest in the product.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			itemCodeableConcept: {
				type: new GraphQLNonNull(require('./codeableconcept.input')),
				description:
					'The actual ingredient - either a substance (simple ingredient) or another medication.',
			},
			itemReference: {
				type: new GraphQLNonNull(require('./reference.input')),
				description:
					'The actual ingredient - either a substance (simple ingredient) or another medication.',
			},
			isActive: {
				type: GraphQLBoolean,
				description:
					'Indication of whether this ingredient affects the therapeutic action of the drug.',
			},
			_isActive: {
				type: require('./element.input'),
				description:
					'Indication of whether this ingredient affects the therapeutic action of the drug.',
			},
			amount: {
				type: require('./ratio.input'),
				description:
					'Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.',
			},
		}),
});
