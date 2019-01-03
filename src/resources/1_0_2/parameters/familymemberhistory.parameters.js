const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the familymemberhistory query
 */
module.exports = {
	relationship: {
		type: TokenScalar,
		description:
			'A search by a relationship type (See http://hl7.org/fhir/SearchParameter/familymemberhistory-relationship).',
	},
	patient: {
		type: GraphQLString,
		description:
			'The identity of a subject to list family member history items for (See http://hl7.org/fhir/SearchParameter/familymemberhistory-patient).',
	},
	gender: {
		type: TokenScalar,
		description:
			'A search by a gender code of a family member (See http://hl7.org/fhir/SearchParameter/familymemberhistory-gender).',
	},
	code: {
		type: TokenScalar,
		description:
			'A search by a condition code (See http://hl7.org/fhir/SearchParameter/familymemberhistory-code).',
	},
	date: {
		type: DateScalar,
		description:
			'When history was captured/updated (See http://hl7.org/fhir/SearchParameter/familymemberhistory-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'A search by a record identifier (See http://hl7.org/fhir/SearchParameter/familymemberhistory-identifier).',
	},
};
