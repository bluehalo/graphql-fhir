const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the familymemberhistory query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.condition.code',
		description: 'A search by a condition code',
	},
	// http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'FamilyMemberHistory.date',
		description: 'When history was captured/updated',
	},
	// http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-gender
	gender: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.gender',
		description: 'A search by a gender code of a family member',
	},
	// http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.identifier',
		description: 'A search by a record identifier',
	},
	// http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'FamilyMemberHistory.patient',
		description:
			'The identity of a subject to list family member history items for',
	},
	// http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-relationship
	relationship: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'FamilyMemberHistory.relationship',
		description: 'A search by a relationship type',
	},
	// http://hl7.org/fhir/SearchParameter/familymemberhistory-daf-FamilyMemberHistory-condition
	condition: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: '',
		description:
			"Search for a history of a particular condition within a patient's family.",
	},
};
