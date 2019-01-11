const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the explanationofbenefit query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-care-team
	care_team: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.careTeam.provider',
		description: 'Member of the CareTeam',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-claim
	claim: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.claim',
		description: 'The reference to the claim',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-coverage
	coverage: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.insurance.coverage',
		description: 'The plan under which the claim was adjudicated',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ExplanationOfBenefit.created',
		description: 'The creation date for the EOB',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-detail-udi
	detail_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.item.detail.udi',
		description: 'UDI associated with a line item detail product or service',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-disposition
	disposition: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ExplanationOfBenefit.disposition',
		description: 'The contents of the disposition message',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.item.encounter',
		description: 'Encounters associated with a billed line item',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-enterer
	enterer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.enterer',
		description: 'The party responsible for the entry of the Claim',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-facility
	facility: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.facility',
		description: 'Facility responsible for the goods and services',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExplanationOfBenefit.identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-item-udi
	item_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.item.udi',
		description: 'UDI associated with a line item product or service',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.patient',
		description: 'The reference to the patient',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-payee
	payee: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.payee.party',
		description: 'The party receiving any payment for the Claim',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-procedure-udi
	procedure_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.procedure.udi',
		description: 'UDI associated with a procedure',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.provider',
		description: 'The reference to the provider',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExplanationOfBenefit.status',
		description: 'Status of the instance',
	},
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-subdetail-udi
	subdetail_udi: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ExplanationOfBenefit.item.detail.subDetail.udi',
		description:
			'UDI associated with a line item detail subdetail product or service',
	},
};
