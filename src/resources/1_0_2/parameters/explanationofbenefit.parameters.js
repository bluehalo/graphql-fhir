const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the explanationofbenefit query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExplanationOfBenefit.identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
};
