const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the claimresponse query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The identity of the claimresponse (See http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier).'
	},
	request: {
		type: GraphQLString,
		description: 'The claim reference (See http://hl7.org/fhir/SearchParameter/ClaimResponse-request).'
	},
	disposition: {
		type: GraphQLString,
		description: 'The contents of the disposition message (See http://hl7.org/fhir/SearchParameter/ClaimResponse-disposition).'
	},
	insurer: {
		type: GraphQLString,
		description: 'The organization who generated this resource (See http://hl7.org/fhir/SearchParameter/ClaimResponse-insurer).'
	},
	created: {
		type: DateScalar,
		description: 'The creation date (See http://hl7.org/fhir/SearchParameter/ClaimResponse-created).'
	},
	patient: {
		type: GraphQLString,
		description: 'The subject of care. (See http://hl7.org/fhir/SearchParameter/ClaimResponse-patient).'
	},
	payment_date: {
		type: DateScalar,
		description: 'The expected paymentDate (See http://hl7.org/fhir/SearchParameter/ClaimResponse-payment-date).'
	},
	request_provider: {
		type: GraphQLString,
		description: 'The Provider of the claim (See http://hl7.org/fhir/SearchParameter/ClaimResponse-request-provider).'
	},
	outcome: {
		type: TokenScalar,
		description: 'The processing outcome (See http://hl7.org/fhir/SearchParameter/ClaimResponse-outcome).'
	}
};
