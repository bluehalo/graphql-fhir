const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the processresponse query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'The business identifier of the Explanation of Benefit (See http://hl7.org/fhir/SearchParameter/ProcessResponse-identifier).',
	},
	request: {
		type: GraphQLString,
		description:
			'The reference to the claim (See http://hl7.org/fhir/SearchParameter/ProcessResponse-request).',
	},
	organization: {
		type: GraphQLString,
		description:
			'The organization who generated this resource (See http://hl7.org/fhir/SearchParameter/ProcessResponse-organization).',
	},
	request_organization: {
		type: GraphQLString,
		description:
			'The Organization who is responsible the request transaction (See http://hl7.org/fhir/SearchParameter/ProcessResponse-request-organization).',
	},
	request_provider: {
		type: GraphQLString,
		description:
			'The Provider who is responsible the request transaction (See http://hl7.org/fhir/SearchParameter/ProcessResponse-request-provider).',
	},
};
