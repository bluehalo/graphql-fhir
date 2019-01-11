const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the substance query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Substance-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Substance.category',
		description: 'The category of the substance',
	},
	// http://hl7.org/fhir/SearchParameter/Substance-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Substance.code',
		description: 'The code of the substance or ingredient',
	},
	// http://hl7.org/fhir/SearchParameter/Substance-container-identifier
	container_identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Substance.instance.identifier',
		description: 'Identifier of the package/container',
	},
	// http://hl7.org/fhir/SearchParameter/Substance-expiry
	expiry: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Substance.instance.expiry',
		description: 'Expiry date of package or container of substance',
	},
	// http://hl7.org/fhir/SearchParameter/Substance-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Substance.identifier',
		description: 'Unique identifier for the substance',
	},
	// http://hl7.org/fhir/SearchParameter/Substance-quantity
	quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Substance.instance.quantity',
		description: 'Amount of substance in the package',
	},
	// http://hl7.org/fhir/SearchParameter/Substance-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Substance.status',
		description: 'active | inactive | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/Substance-substance-reference
	substance_reference: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Substance.ingredient.substanceReference',
		description: 'A component of the substance',
	},
};
