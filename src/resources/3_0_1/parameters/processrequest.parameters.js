const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the processrequest query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'The business identifier of the ProcessRequest (See http://hl7.org/fhir/SearchParameter/ProcessRequest-identifier).',
	},
	provider: {
		type: GraphQLString,
		description:
			'The provider who regenerated this request (See http://hl7.org/fhir/SearchParameter/ProcessRequest-provider).',
	},
	organization: {
		type: GraphQLString,
		description:
			'The organization who generated this request (See http://hl7.org/fhir/SearchParameter/ProcessRequest-organization).',
	},
	action: {
		type: TokenScalar,
		description:
			'The action requested by this resource (See http://hl7.org/fhir/SearchParameter/ProcessRequest-action).',
	},
};
