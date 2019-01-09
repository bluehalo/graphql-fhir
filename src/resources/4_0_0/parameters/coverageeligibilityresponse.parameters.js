const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the coverageeligibilityresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CoverageEligibilityResponse.created',
		description: 'The creation date',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-disposition
	disposition: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CoverageEligibilityResponse.disposition',
		description: 'The contents of the disposition message',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CoverageEligibilityResponse.identifier',
		description: 'The business identifier',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-insurer
	insurer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.insurer',
		description: 'The organization which generated this resource',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-outcome
	outcome: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CoverageEligibilityResponse.outcome',
		description: 'The processing outcome',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.patient',
		description: 'The reference to the patient',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.request',
		description: 'The EligibilityRequest reference',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-requestor
	requestor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.requestor',
		description: 'The EligibilityRequest provider',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CoverageEligibilityResponse.status',
		description: 'The EligibilityRequest status',
	},
};
