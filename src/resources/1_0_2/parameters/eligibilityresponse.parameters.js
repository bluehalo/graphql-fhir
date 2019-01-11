const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EligibilityResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EligibilityResponse.identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
};
