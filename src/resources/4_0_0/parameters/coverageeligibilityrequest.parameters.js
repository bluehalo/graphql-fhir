const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the coverageeligibilityrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CoverageEligibilityRequest.created',
		description: 'The creation date for the EOB',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-enterer
	enterer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.enterer',
		description: 'The party who is responsible for the request',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-facility
	facility: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.facility',
		description: 'Facility responsible for the goods and services',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CoverageEligibilityRequest.identifier',
		description: 'The business identifier of the Eligibility',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.patient',
		description: 'The reference to the patient',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.provider',
		description: 'The reference to the provider',
	},
	// http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CoverageEligibilityRequest.status',
		description: 'The status of the EligibilityRequest',
	},
};
