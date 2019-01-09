const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the paymentreconciliation query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/PaymentReconciliation-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'PaymentReconciliation.identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
};
