const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the bundle query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Persistent identifier for the bundle. See http://hl7.org/fhir/SearchParameter/Bundle-identifier.'
	},
	composition: {
		type: GraphQLString,
		description: 'The first resource in the bundle, if the bundle type is \'document\' - this is a composition, and this parameter provides access to searches its contents. See http://hl7.org/fhir/SearchParameter/Bundle-composition.'
	},
	type: {
		type: TokenScalar,
		description: 'document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection. See http://hl7.org/fhir/SearchParameter/Bundle-type.'
	},
	message: {
		type: GraphQLString,
		description: 'The first resource in the bundle, if the bundle type is \'message\' - this is a message header, and this parameter provides access to search its contents. See http://hl7.org/fhir/SearchParameter/Bundle-message.'
	}
};
