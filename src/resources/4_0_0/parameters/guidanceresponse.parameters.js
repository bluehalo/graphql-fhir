const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the guidanceresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/GuidanceResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GuidanceResponse.identifier',
		description: 'The identifier of the guidance response',
	},
	// http://hl7.org/fhir/SearchParameter/GuidanceResponse-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'GuidanceResponse.subject',
		description:
			'The identity of a patient to search for guidance response results',
	},
	// http://hl7.org/fhir/SearchParameter/GuidanceResponse-request
	request: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'GuidanceResponse.requestIdentifier',
		description: 'The identifier of the request associated with the response',
	},
	// http://hl7.org/fhir/SearchParameter/GuidanceResponse-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'GuidanceResponse.subject',
		description: 'The subject that the guidance response is about',
	},
};
