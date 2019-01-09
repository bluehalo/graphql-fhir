const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the substancespecification query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/SubstanceSpecification-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'SubstanceSpecification.code',
		description: 'Codes associated with the substance',
	},
};
