const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the referralrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ReferralRequest.date',
		description: 'Creation or activation date',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.patient',
		description: 'Who the referral is about',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.priority',
		description: 'The priority assigned to the referral',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient
	recipient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.recipient',
		description: 'The person that the referral was sent to',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ReferralRequest.requester',
		description: 'Requester of referral / transfer of care',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.specialty',
		description: 'The specialty that the referral is for',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.status',
		description: 'The status of the referral',
	},
	// http://hl7.org/fhir/SearchParameter/ReferralRequest-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ReferralRequest.type',
		description: 'The type of the referral',
	},
};
