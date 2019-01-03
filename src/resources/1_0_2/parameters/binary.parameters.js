const TokenScalar = require('../scalars/token.scalar');

/**
 * @name exports
 * @static
 * @summary Arguments for the binary query
 */
module.exports = {
	contenttype: {
		type: TokenScalar,
		description:
			'MimeType of the binary content (See http://hl7.org/fhir/SearchParameter/binary-contenttype).',
	},
};
