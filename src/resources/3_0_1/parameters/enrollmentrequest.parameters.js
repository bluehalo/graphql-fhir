const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentrequest query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The business identifier of the Enrollment. See http://hl7.org/fhir/SearchParameter/EnrollmentRequest-identifier.'
	},
	subject: {
		type: GraphQLString,
		description: 'The party to be enrolled. See http://hl7.org/fhir/SearchParameter/EnrollmentRequest-subject.'
	},
	patient: {
		type: GraphQLString,
		description: 'The party to be enrolled. See http://hl7.org/fhir/SearchParameter/EnrollmentRequest-patient.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization who generated this resource. See http://hl7.org/fhir/SearchParameter/EnrollmentRequest-organization.'
	}
};
