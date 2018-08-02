const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLList, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponseAddItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponseAddItem_Input',
	description: 'The first tier service adjudications for payor added services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequenceLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'List of input service items which this service line is intended to replace.'
		},
		_sequenceLinkId: {
			type: require('./element.input'),
			description: 'List of input service items which this service line is intended to replace.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'A code to indicate the Professional Service or Product supplied.'
		},
		fee: {
			type: require('./quantity.input'),
			description: 'The fee charged for the professional service or product..'
		},
		noteNumberLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.'
		},
		_noteNumberLinkId: {
			type: require('./element.input'),
			description: 'A list of note references to the notes provided below.'
		},
		adjudication: {
			type: new GraphQLList(require('./claimresponseadditemadjudication.input')),
			description: 'The adjudications results.'
		},
		detail: {
			type: new GraphQLList(require('./claimresponseadditemdetail.input')),
			description: 'The second tier service adjudications for payor added services.'
		}
	})
});
