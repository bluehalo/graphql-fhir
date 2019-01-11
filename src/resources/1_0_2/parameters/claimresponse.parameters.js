const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the claimresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ClaimResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ClaimResponse.identifier',
		description: 'The identity of the insurer',
	},
};
