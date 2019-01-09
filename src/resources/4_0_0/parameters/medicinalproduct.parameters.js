const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproduct query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicinalProduct-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProduct.identifier',
		description: 'Business identifier for this product. Could be an MPID',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProduct-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'MedicinalProduct.name.productName',
		description: 'The full product name',
	},
	// http://hl7.org/fhir/SearchParameter/MedicinalProduct-name-language
	name_language: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicinalProduct.name.countryLanguage.language',
		description: 'Language code for this name',
	},
};
