const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the guidanceresponse query
 */
module.exports = {
	request: {
		type: TokenScalar,
		description: 'The identifier of the request associated with the response. See http://hl7.org/fhir/SearchParameter/GuidanceResponse-request.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identifier of the guidance response. See http://hl7.org/fhir/SearchParameter/GuidanceResponse-identifier.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to search for guidance response results. See http://hl7.org/fhir/SearchParameter/GuidanceResponse-patient.'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject that the guidance response is about. See http://hl7.org/fhir/SearchParameter/GuidanceResponse-subject.'
	}
};
