const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the bodystructure query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/BodyStructure-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'BodyStructure.identifier',
		description: 'Bodystructure identifier',
	},
	// http://hl7.org/fhir/SearchParameter/BodyStructure-location
	location: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'BodyStructure.location',
		description: 'Body site',
	},
	// http://hl7.org/fhir/SearchParameter/BodyStructure-morphology
	morphology: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'BodyStructure.morphology',
		description: 'Kind of Structure',
	},
	// http://hl7.org/fhir/SearchParameter/BodyStructure-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'BodyStructure.patient',
		description: 'Who this is about',
	},
};
