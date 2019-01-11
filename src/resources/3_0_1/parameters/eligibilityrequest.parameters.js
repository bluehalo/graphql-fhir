const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EligibilityRequest.created',
		description: 'The creation date for the EOB',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-enterer
	enterer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.enterer',
		description: 'The party who is responsible for the request',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-facility
	facility: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.facility',
		description: 'Facility responsible for the goods and services',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EligibilityRequest.identifier',
		description: 'The business identifier of the Eligibility',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.organization',
		description: 'The reference to the providing organization',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.patient',
		description: 'The reference to the patient',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.provider',
		description: 'The reference to the provider',
	},
};
