const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SupplyRequest.orderedItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SupplyRequestOrderedItem_Input',
	description: 'The item being requested.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			quantity: {
				type: new GraphQLNonNull(require('./quantity.input')),
				description: 'The amount that is being ordered of the indicated item.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/supply-item
			itemCodeableConcept: {
				type: require('./codeableconcept.input'),
				description:
					'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/supply-item
			itemReference: {
				type: require('./reference.input'),
				description:
					'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
			},
		}),
});
