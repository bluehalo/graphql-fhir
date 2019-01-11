const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the organization query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Organization-active
	active: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Organization.active',
		description: 'Is the Organization record active',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Organization.address',
		description:
			'A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Organization.address.city',
		description: 'A city specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Organization.address.country',
		description: 'A country specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Organization.address.postalCode',
		description: 'A postal code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Organization.address.state',
		description: 'A state specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Organization.address.use',
		description: 'A use code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-endpoint
	endpoint: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Organization.endpoint',
		description:
			'Technical endpoints providing access to services operated for the organization',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Organization.identifier',
		description:
			"Any identifier for the organization (not the accreditation issuer's identifier)",
	},
	// http://hl7.org/fhir/SearchParameter/Organization-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Organization.name',
		description: "A portion of the organization's name or alias",
	},
	// http://hl7.org/fhir/SearchParameter/Organization-partof
	partof: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Organization.partOf',
		description: 'An organization of which this organization forms a part',
	},
	// http://hl7.org/fhir/SearchParameter/Organization-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Organization.name',
		description:
			"A portion of the organization's name using some kind of phonetic matching algorithm",
	},
	// http://hl7.org/fhir/SearchParameter/Organization-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Organization.type',
		description: 'A code for the type of organization',
	},
};
