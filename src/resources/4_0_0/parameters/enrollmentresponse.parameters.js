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
	// http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EnrollmentResponse.request',
		description: 'The reference to the claim',
	},
	// http://hl7.org/fhir/SearchParameter/EnrollmentResponse-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EnrollmentResponse.status',
		description: 'The status of the enrollment response',
	},
};
