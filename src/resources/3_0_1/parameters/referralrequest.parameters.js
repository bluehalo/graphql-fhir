const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the referralrequest query
 */
module.exports = {
	requester: {
		type: GraphQLString,
		description: 'Individual making the request. See http://hl7.org/fhir/SearchParameter/ReferralRequest-requester.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business identifier. See http://hl7.org/fhir/SearchParameter/ReferralRequest-identifier.'
	},
	specialty: {
		type: TokenScalar,
		description: 'The specialty that the referral is for. See http://hl7.org/fhir/SearchParameter/ReferralRequest-specialty.'
	},
	replaces: {
		type: GraphQLString,
		description: 'Request(s) replaced by this request. See http://hl7.org/fhir/SearchParameter/ReferralRequest-replaces.'
	},
	subject: {
		type: GraphQLString,
		description: 'Patient referred to care or transfer. See http://hl7.org/fhir/SearchParameter/ReferralRequest-subject.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Originating encounter. See http://hl7.org/fhir/SearchParameter/ReferralRequest-encounter.'
	},
	authored_on: {
		type: DateScalar,
		description: 'Creation or activation date. See http://hl7.org/fhir/SearchParameter/ReferralRequest-authored-on.'
	},
	type: {
		type: TokenScalar,
		description: 'The type of the referral. See http://hl7.org/fhir/SearchParameter/clinical-type.'
	},
	priority: {
		type: TokenScalar,
		description: 'The priority assigned to the referral. See http://hl7.org/fhir/SearchParameter/ReferralRequest-priority.'
	},
	intent: {
		type: TokenScalar,
		description: 'Proposal, plan or order. See http://hl7.org/fhir/SearchParameter/ReferralRequest-intent.'
	},
	group_identifier: {
		type: TokenScalar,
		description: 'Part of common request. See http://hl7.org/fhir/SearchParameter/ReferralRequest-group-identifier.'
	},
	based_on: {
		type: GraphQLString,
		description: 'Request being fulfilled. See http://hl7.org/fhir/SearchParameter/ReferralRequest-based-on.'
	},
	patient: {
		type: GraphQLString,
		description: 'Who the referral is about. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	service: {
		type: TokenScalar,
		description: 'Actions requested as part of the referral. See http://hl7.org/fhir/SearchParameter/ReferralRequest-service.'
	},
	occurrence_date: {
		type: DateScalar,
		description: 'When the service(s) requested in the referral should occur. See http://hl7.org/fhir/SearchParameter/ReferralRequest-occurrence-date.'
	},
	recipient: {
		type: GraphQLString,
		description: 'The person that the referral was sent to. See http://hl7.org/fhir/SearchParameter/ReferralRequest-recipient.'
	},
	context: {
		type: GraphQLString,
		description: 'Part of encounter or episode of care. See http://hl7.org/fhir/SearchParameter/ReferralRequest-context.'
	},
	definition: {
		type: GraphQLString,
		description: 'Instantiates protocol or definition. See http://hl7.org/fhir/SearchParameter/ReferralRequest-definition.'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the referral. See http://hl7.org/fhir/SearchParameter/ReferralRequest-status.'
	}
};
