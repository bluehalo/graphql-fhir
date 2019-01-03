const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ExplanationOfBenefit.payment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitPayment',
	description: 'Payment details for the claim if the claim has been paid.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-paymenttype
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Whether this represents partial or complete payment of the claim.'
		},
		adjustment: {
			type: require('./money.schema'),
			description: 'Adjustment to the payment of this transaction which is not related to adjudication of this transaction.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payment-adjustment-reason
		adjustmentReason: {
			type: require('./codeableconcept.schema'),
			description: 'Reason for the payment adjustment.'
		},
		date: {
			type: DateScalar,
			description: 'Estimated payment date.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'Estimated payment date.'
		},
		amount: {
			type: require('./money.schema'),
			description: 'Payable less any payment adjustment.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Payment identifer.'
		}
	})
});
