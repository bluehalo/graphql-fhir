const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Medication.package.content Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationPackageContent',
	description: 'A set of components that go to make up the described item.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		itemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identifies one of the items in the package.'
		},
		itemReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies one of the items in the package.'
		},
		amount: {
			type: require('./quantity.schema'),
			description: 'The amount of the product that is in the package.'
		}
	})
});
