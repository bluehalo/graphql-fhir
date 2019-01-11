const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the processresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ProcessResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcessResponse.identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
	// http://hl7.org/fhir/SearchParameter/ProcessResponse-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcessResponse.organization',
		description: 'The organization who generated this resource',
	},
	// http://hl7.org/fhir/SearchParameter/ProcessResponse-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcessResponse.request',
		description: 'The reference to the claim',
	},
	// http://hl7.org/fhir/SearchParameter/ProcessResponse-request-organization
	request_organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcessResponse.requestOrganization',
		description: 'The Organization who is responsible the request transaction',
	},
	// http://hl7.org/fhir/SearchParameter/ProcessResponse-request-provider
	request_provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcessResponse.requestProvider',
		description: 'The Provider who is responsible the request transaction',
	},
};
