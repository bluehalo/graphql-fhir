const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentresponse query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'The business identifier of the EnrollmentResponse (See http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier).',
	},
	request: {
		type: GraphQLString,
		description:
			'The reference to the claim (See http://hl7.org/fhir/SearchParameter/EnrollmentResponse-request).',
	},
	organization: {
		type: GraphQLString,
		description:
			'The organization who generated this resource (See http://hl7.org/fhir/SearchParameter/EnrollmentResponse-organization).',
	},
};
