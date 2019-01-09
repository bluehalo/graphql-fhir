const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the claim query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Claim-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Claim.identifier',
		description: 'The primary identifier of the financial resource',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.patient',
		description: 'Patient',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Claim.priority',
		description: 'Processing priority requested',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Claim.provider',
		description: 'Provider responsible for the claim',
	},
	// http://hl7.org/fhir/SearchParameter/Claim-use
	use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Claim.use',
		description: 'The kind of financial resource',
	},
};
