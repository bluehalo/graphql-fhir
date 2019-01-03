const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Medication.product Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationProduct',
	description: 'Information that only applies to products (not packages).',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-form-codes
			form: {
				type: require('./codeableconcept.schema'),
				description:
					'Describes the form of the item.  Powder; tablets; carton.',
			},
			ingredient: {
				type: new GraphQLList(require('./medicationproductingredient.schema')),
				description:
					'Identifies a particular constituent of interest in the product.',
			},
			batch: {
				type: new GraphQLList(require('./medicationproductbatch.schema')),
				description:
					'Information about a group of medication produced or packaged from one production run.',
			},
		}),
});
