const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimResponsePayment Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponsePayment_Input',
	description: 'Payment details for the claim if the claim has been paid.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ex-paymenttype
		type: {
			type: require('./codeableconcept.input'),
			description: 'Whether this represents partial or complete payment of the claim.'
		},
		adjustment: {
			type: require('./money.input'),
			description: 'Adjustment to the payment of this transaction which is not related to adjudication of this transaction.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/payment-adjustment-reason
		adjustmentReason: {
			type: require('./codeableconcept.input'),
			description: 'Reason for the payment adjustment.'
		},
		date: {
			type: DateScalar,
			description: 'Estimated payment data.'
		},
		_date: {
			type: require('./element.input'),
			description: 'Estimated payment data.'
		},
		amount: {
			type: require('./money.input'),
			description: 'Payable less any payment adjustment.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Payment identifier.'
		}
	})
});
