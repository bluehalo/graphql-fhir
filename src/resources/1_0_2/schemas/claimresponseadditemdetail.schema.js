const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponse.addItem.detail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponseAddItemDetail',
	description: 'The second tier service adjudications for payor added services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'A code to indicate the Professional Service or Product supplied.'
		},
		fee: {
			type: require('./quantity.schema'),
			description: 'The fee charged for the professional service or product..'
		},
		adjudication: {
			type: new GraphQLList(require('./claimresponseadditemdetailadjudication.schema')),
			description: 'The adjudications results.'
		}
	})
});
