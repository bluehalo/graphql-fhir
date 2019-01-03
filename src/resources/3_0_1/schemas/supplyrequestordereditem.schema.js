const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SupplyRequest.orderedItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyRequestOrderedItem',
	description: 'The item being requested.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			quantity: {
				type: new GraphQLNonNull(require('./quantity.schema')),
				description: 'The amount that is being ordered of the indicated item.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/supply-item
			itemCodeableConcept: {
				type: require('./codeableconcept.schema'),
				description:
					'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/supply-item
			itemReference: {
				type: require('./reference.schema'),
				description:
					'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
			},
		}),
});
