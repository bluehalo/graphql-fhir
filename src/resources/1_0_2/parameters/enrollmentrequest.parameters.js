const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EnrollmentRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EnrollmentRequest.identifier',
		description: 'The business identifier of the Enrollment',
	},
	// http://hl7.org/fhir/SearchParameter/EnrollmentRequest-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EnrollmentRequest.subject',
		description: 'The party to be enrolled',
	},
	// http://hl7.org/fhir/SearchParameter/EnrollmentRequest-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'EnrollmentRequest.subject',
		description: 'The party to be enrolled',
	},
};
