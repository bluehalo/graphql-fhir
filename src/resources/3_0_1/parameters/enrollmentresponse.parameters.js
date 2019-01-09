const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EnrollmentResponse.identifier',
		description: 'The business identifier of the EnrollmentResponse',
	},
	// http://hl7.org/fhir/SearchParameter/EnrollmentResponse-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EnrollmentResponse.organization',
		description: 'The organization who generated this resource',
	},
	// http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EnrollmentResponse.request',
		description: 'The reference to the claim',
	},
};
