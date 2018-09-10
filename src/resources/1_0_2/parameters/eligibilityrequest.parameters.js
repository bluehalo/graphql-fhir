const TokenScalar = require('../scalars/token.scalar');

/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityrequest query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'The business identifier of the Eligibility (See http://hl7.org/fhir/SearchParameter/eligibilityrequest-identifier).'
	}
};
