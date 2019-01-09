const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the binary query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Binary-contenttype
	contenttype: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Binary.contentType',
		description: 'MimeType of the binary content',
	},
};
