const TokenScalar = require('../scalars/token.scalar');

/**
 * @name exports
 * @static
 * @summary Arguments for the claimresponse query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The identity of the insurer. See http://hl7.org/fhir/SearchParameter/claimresponse-identifier.'
	}
};
