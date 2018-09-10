const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SupplyDelivery.suppliedItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyDeliverySuppliedItem',
	description: 'The item that is being delivered or has been supplied.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		quantity: {
			type: require('./quantity.schema'),
			description: 'The amount of supply that has been dispensed. Includes unit of measure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supply-item
		itemCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/supply-item
		itemReference: {
			type: require('./reference.schema'),
			description: 'Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.'
		}
	})
});
