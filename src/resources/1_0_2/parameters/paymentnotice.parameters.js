const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the paymentnotice query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/PaymentNotice-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PaymentNotice.identifier',
		description: 'The business identifier of the Eligibility',
	},
};
