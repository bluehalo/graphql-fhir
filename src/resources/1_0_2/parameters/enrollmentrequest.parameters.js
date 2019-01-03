const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentrequest query
 */
module.exports = {
	patient: {
		type: GraphQLString,
		description:
			'The party to be enrolled (See http://hl7.org/fhir/SearchParameter/enrollmentrequest-patient).',
	},
	subject: {
		type: GraphQLString,
		description:
			'The party to be enrolled (See http://hl7.org/fhir/SearchParameter/enrollmentrequest-subject).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'The business identifier of the Enrollment (See http://hl7.org/fhir/SearchParameter/enrollmentrequest-identifier).',
	},
};
