const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLList } = require('graphql');

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
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ex-revenue-center
		revenue: {
			type: require('./codeableconcept.input'),
			description: 'The type of reveneu or cost center providing the product and/or service.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		category: {
			type: require('./codeableconcept.input'),
			description: 'Health Care Service Type Codes  to identify the classification of service or benefits.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: require('./codeableconcept.input'),
			description: 'A code to indicate the Professional Service or Product supplied.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.'
		},
		fee: {
			type: require('./money.input'),
			description: 'The fee charged for the professional service or product..'
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.'
		},
		_noteNumber: {
			type: require('./element.input'),
			description: 'A list of note references to the notes provided below.'
		},
		detail: {
			type: new GraphQLList(require('./claimresponseadditemdetail.input')),
			description: 'The second tier service adjudications for payor added services.'
		}
	})
});
