const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EligibilityRequest.identifier',
		description: 'The business identifier of the Eligibility',
	},
};
