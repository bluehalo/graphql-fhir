const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Medication.product Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationProduct_Input',
	description: 'Information that only applies to products (not packages).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-form-codes
		form: {
			type: require('./codeableconcept.input'),
			description: 'Describes the form of the item.  Powder; tablets; carton.'
		},
		ingredient: {
			type: new GraphQLList(require('./medicationproductingredient.input')),
			description: 'Identifies a particular constituent of interest in the product.'
		},
		batch: {
			type: new GraphQLList(require('./medicationproductbatch.input')),
			description: 'Information about a group of medication produced or packaged from one production run.'
		}
	})
});
