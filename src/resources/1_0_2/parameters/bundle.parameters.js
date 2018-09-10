const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the bundle query
 */
module.exports = {
	message: {
		type: GraphQLString,
		description: 'The first resource in the bundle, if the bundle type is \'message\' - this is a message header, and this parameter provides access to search its contents (See http://hl7.org/fhir/SearchParameter/bundle-message).'
	},
	composition: {
		type: GraphQLString,
		description: 'The first resource in the bundle, if the bundle type is \'document\' - this is a composition, and this parameter provides access to searches its contents (See http://hl7.org/fhir/SearchParameter/bundle-composition).'
	},
	type: {
		type: TokenScalar,
		description: 'document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection (See http://hl7.org/fhir/SearchParameter/bundle-type).'
	}
};
