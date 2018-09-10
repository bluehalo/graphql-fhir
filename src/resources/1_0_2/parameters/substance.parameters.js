const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the substance query
 */
module.exports = {
	substance: {
		type: GraphQLString,
		description: 'A component of the substance (See http://hl7.org/fhir/SearchParameter/substance-substance).'
	},
	container_identifier: {
		type: TokenScalar,
		description: 'Identifier of the package/container (See http://hl7.org/fhir/SearchParameter/substance-container-identifier).'
	},
	category: {
		type: TokenScalar,
		description: 'The category of the substance (See http://hl7.org/fhir/SearchParameter/substance-category).'
	},
	quantity: {
		type: GraphQLString,
		description: 'Amount of substance in the package (See http://hl7.org/fhir/SearchParameter/substance-quantity).'
	},
	code: {
		type: TokenScalar,
		description: 'The code of the substance (See http://hl7.org/fhir/SearchParameter/substance-code).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique identifier for the substance (See http://hl7.org/fhir/SearchParameter/substance-identifier).'
	},
	expiry: {
		type: DateScalar,
		description: 'Expiry date of package or container of substance (See http://hl7.org/fhir/SearchParameter/substance-expiry).'
	}
};
