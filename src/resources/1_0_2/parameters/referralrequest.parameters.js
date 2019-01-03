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
		description:
			'Requester of referral / transfer of care (See http://hl7.org/fhir/SearchParameter/referralrequest-requester).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who the referral is about (See http://hl7.org/fhir/SearchParameter/referralrequest-patient).',
	},
	status: {
		type: TokenScalar,
		description:
			'The status of the referral (See http://hl7.org/fhir/SearchParameter/referralrequest-status).',
	},
	priority: {
		type: TokenScalar,
		description:
			'The priority assigned to the referral (See http://hl7.org/fhir/SearchParameter/referralrequest-priority).',
	},
	type: {
		type: TokenScalar,
		description:
			'The type of the referral (See http://hl7.org/fhir/SearchParameter/referralrequest-type).',
	},
	date: {
		type: DateScalar,
		description:
			'Creation or activation date (See http://hl7.org/fhir/SearchParameter/referralrequest-date).',
	},
	specialty: {
		type: TokenScalar,
		description:
			'The specialty that the referral is for (See http://hl7.org/fhir/SearchParameter/referralrequest-specialty).',
	},
	recipient: {
		type: GraphQLString,
		description:
			'The person that the referral was sent to (See http://hl7.org/fhir/SearchParameter/referralrequest-recipient).',
	},
};
