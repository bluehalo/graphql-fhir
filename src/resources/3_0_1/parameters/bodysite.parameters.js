const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the bodysite query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/BodySite-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'BodySite.code',
		description: 'Named anatomical location',
	},
	// http://hl7.org/fhir/SearchParameter/BodySite-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'BodySite.identifier',
		description: 'Identifier for this instance of the anatomical location',
	},
	// http://hl7.org/fhir/SearchParameter/BodySite-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'BodySite.patient',
		description: 'Patient to whom bodysite belongs',
	},
};
