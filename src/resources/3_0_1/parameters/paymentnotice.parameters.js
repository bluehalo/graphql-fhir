const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the paymentnotice query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'PaymentNotice.created',
		description: 'Creation date fro the notice',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PaymentNotice.identifier',
		description: 'The business identifier of the notice',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PaymentNotice.organization',
		description: 'The organization who generated this resource',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status
	payment_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PaymentNotice.paymentStatus',
		description: 'The type of payment notice',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PaymentNotice.provider',
		description: 'The reference to the provider',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PaymentNotice.request',
		description: 'The Claim',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-response
	response: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'PaymentNotice.response',
		description: 'The ClaimResponse',
	},
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-statusdate
	statusdate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'PaymentNotice.statusDate',
		description: 'The date of the payment action',
	},
};
