const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-created
	created: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'EligibilityResponse.created',
		description: 'The creation date',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-disposition
	disposition: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'EligibilityResponse.disposition',
		description: 'The contents of the disposition message',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EligibilityResponse.identifier',
		description: 'The business identifier',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-insurer
	insurer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.insurer',
		description: 'The organization which generated this resource',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-outcome
	outcome: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EligibilityResponse.outcome',
		description: 'The processing outcome',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.request',
		description: 'The EligibilityRequest reference',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-organization
	request_organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.requestOrganization',
		description: 'The EligibilityRequest organization',
	},
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-provider
	request_provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.requestProvider',
		description: 'The EligibilityRequest provider',
	},
};
