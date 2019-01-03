const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Medication.package.content Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationPackageContent_Input',
	description: 'A set of components that go to make up the described item.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		itemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies one of the items in the package.'
		},
		itemReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Identifies one of the items in the package.'
		},
		amount: {
			type: require('./quantity.input'),
			description: 'The amount of the product that is in the package.'
		}
	})
});
