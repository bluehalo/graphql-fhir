const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationPackageContent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationPackageContent',
	description: 'A set of components that go to make up the described item.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		item: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies one of the items in the package.'
		},
		amount: {
			type: require('./quantity.schema'),
			description: 'The amount of the product that is in the package.'
		}
	})
});
