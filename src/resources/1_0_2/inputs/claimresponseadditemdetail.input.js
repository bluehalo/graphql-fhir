const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponseAddItemDetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseAddItemDetail_Input',
	description: 'The second tier service adjudications for payor added services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'A code to indicate the Professional Service or Product supplied.'
		},
		fee: {
			type: require('./quantity.input'),
			description: 'The fee charged for the professional service or product..'
		},
		adjudication: {
			type: new GraphQLList(require('./claimresponseadditemdetailadjudication.input')),
			description: 'The adjudications results.'
		}
	})
});
