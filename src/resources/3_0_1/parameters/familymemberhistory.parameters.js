const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the familymemberhistory query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'When history was captured/updated. See http://hl7.org/fhir/SearchParameter/clinical-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A search by a record identifier. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	code: {
		type: TokenScalar,
		description: 'A search by a condition code. See http://hl7.org/fhir/SearchParameter/clinical-code.'
	},
	gender: {
		type: TokenScalar,
		description: 'A search by a gender code of a family member. See http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-gender.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a subject to list family member history items for. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	definition: {
		type: GraphQLString,
		description: 'Instantiates protocol or definition. See http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-definition.'
	},
	relationship: {
		type: TokenScalar,
		description: 'A search by a relationship type. See http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-relationship.'
	},
	status: {
		type: TokenScalar,
		description: 'partial | completed | entered-in-error | health-unknown. See http://hl7.org/fhir/SearchParameter/FamilyMemberHistory-status.'
	}
};
