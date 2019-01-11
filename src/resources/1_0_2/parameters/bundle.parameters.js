const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the bundle query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Bundle-composition
	composition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Bundle.entry.resource[0]',
		description:
			"The first resource in the bundle, if the bundle type is 'document' - this is a composition, and this parameter provides access to searches its contents",
	},
	// http://hl7.org/fhir/SearchParameter/Bundle-message
	message: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Bundle.entry.resource[0]',
		description:
			"The first resource in the bundle, if the bundle type is 'message' - this is a message header, and this parameter provides access to search its contents",
	},
	// http://hl7.org/fhir/SearchParameter/Bundle-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Bundle.type',
		description:
			'document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection',
	},
};
