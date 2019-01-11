const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the paymentreconciliation query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'PaymentReconciliation.created',
		description: 'The creation date',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-disposition
	disposition: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'PaymentReconciliation.disposition',
		description: 'The contents of the disposition message',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.identifier',
		description: 'The business identifier of the ExplanationOfBenefit',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-outcome
	outcome: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.outcome',
		description: 'The processing outcome',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-payment-issuer
	payment_issuer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.paymentIssuer',
		description: 'The organization which generated this resource',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.request',
		description: 'The reference to the claim',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-requestor
	requestor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PaymentReconciliation.requestor',
		description: 'The reference to the provider who submitted the claim',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.status',
		description: 'The status of the payment reconciliation',
	},
};
