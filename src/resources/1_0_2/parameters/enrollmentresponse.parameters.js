const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the enrollmentresponse query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/EnrollmentResponse-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'EnrollmentResponse.identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
};
