const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the paymentnotice query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The business identifier of the notice. See http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier.'
	},
	request: {
		type: GraphQLString,
		description: 'The Claim. See http://hl7.org/fhir/SearchParameter/PaymentNotice-request.'
	},
	provider: {
		type: GraphQLString,
		description: 'The reference to the provider. See http://hl7.org/fhir/SearchParameter/PaymentNotice-provider.'
	},
	created: {
		type: DateScalar,
		description: 'Creation date fro the notice. See http://hl7.org/fhir/SearchParameter/PaymentNotice-created.'
	},
	response: {
		type: GraphQLString,
		description: 'The ClaimResponse. See http://hl7.org/fhir/SearchParameter/PaymentNotice-response.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization who generated this resource. See http://hl7.org/fhir/SearchParameter/PaymentNotice-organization.'
	},
	payment_status: {
		type: TokenScalar,
		description: 'The type of payment notice. See http://hl7.org/fhir/SearchParameter/PaymentNotice-payment-status.'
	},
	statusdate: {
		type: DateScalar,
		description: 'The date of the payment action. See http://hl7.org/fhir/SearchParameter/PaymentNotice-statusdate.'
	}
};
