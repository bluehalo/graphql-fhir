const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the processresponse query
 */
module.exports = {
	organization: {
		type: GraphQLString,
		description:
			'The organization who generated this resource (See http://hl7.org/fhir/SearchParameter/processresponse-organization).',
	},
	requestprovider: {
		type: GraphQLString,
		description:
			'The Provider who is responsible the request transaction (See http://hl7.org/fhir/SearchParameter/processresponse-requestprovider).',
	},
	request: {
		type: GraphQLString,
		description:
			'The reference to the claim (See http://hl7.org/fhir/SearchParameter/processresponse-request).',
	},
	requestorganization: {
		type: GraphQLString,
		description:
			'The Organization who is responsible the request transaction (See http://hl7.org/fhir/SearchParameter/processresponse-requestorganization).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'The business identifier of the Explanation of Benefit (See http://hl7.org/fhir/SearchParameter/processresponse-identifier).',
	},
};
