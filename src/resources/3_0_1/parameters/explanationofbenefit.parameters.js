const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the explanationofbenefit query
 */
module.exports = {
	coverage: {
		type: GraphQLString,
		description: 'The plan under which the claim was adjudicated (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-coverage).'
	},
	care_team: {
		type: GraphQLString,
		description: 'Member of the CareTeam (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-care-team).'
	},
	identifier: {
		type: TokenScalar,
		description: 'The business identifier of the Explanation of Benefit (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-identifier).'
	},
	created: {
		type: DateScalar,
		description: 'The creation date for the EOB (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-created).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounters associated with a billed line item (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-encounter).'
	},
	payee: {
		type: GraphQLString,
		description: 'The party receiving any payment for the Claim (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-payee).'
	},
	disposition: {
		type: GraphQLString,
		description: 'The contents of the disposition message (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-disposition).'
	},
	provider: {
		type: GraphQLString,
		description: 'The reference to the provider (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-provider).'
	},
	patient: {
		type: GraphQLString,
		description: 'The reference to the patient (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-patient).'
	},
	organization: {
		type: GraphQLString,
		description: 'The reference to the providing organization (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-organization).'
	},
	claim: {
		type: GraphQLString,
		description: 'The reference to the claim (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-claim).'
	},
	enterer: {
		type: GraphQLString,
		description: 'The party responsible for the entry of the Claim (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-enterer).'
	},
	facility: {
		type: GraphQLString,
		description: 'Facility responsible for the goods and services (See http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-facility).'
	}
};
