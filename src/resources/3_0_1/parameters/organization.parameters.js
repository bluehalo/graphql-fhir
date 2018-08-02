const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the organization query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Any identifier for the organization (not the accreditation issuer\'s identifier). See http://hl7.org/fhir/SearchParameter/Organization-identifier.'
	},
	partof: {
		type: GraphQLString,
		description: 'An organization of which this organization forms a part. See http://hl7.org/fhir/SearchParameter/Organization-partof.'
	},
	address: {
		type: GraphQLString,
		description: 'A (part of the) address of the organization. See http://hl7.org/fhir/SearchParameter/Organization-address.'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address. See http://hl7.org/fhir/SearchParameter/Organization-address-state.'
	},
	active: {
		type: TokenScalar,
		description: 'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text. See http://hl7.org/fhir/SearchParameter/Organization-active.'
	},
	type: {
		type: TokenScalar,
		description: 'A code for the type of organization. See http://hl7.org/fhir/SearchParameter/Organization-type.'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postal code specified in an address. See http://hl7.org/fhir/SearchParameter/Organization-address-postalcode.'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address. See http://hl7.org/fhir/SearchParameter/Organization-address-country.'
	},
	endpoint: {
		type: GraphQLString,
		description: 'Technical endpoints providing access to services operated for the organization. See http://hl7.org/fhir/SearchParameter/Organization-endpoint.'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of the organization\'s name using some kind of phonetic matching algorithm. See http://hl7.org/fhir/SearchParameter/Organization-phonetic.'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of the organization\'s name or alias. See http://hl7.org/fhir/SearchParameter/Organization-name.'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address. See http://hl7.org/fhir/SearchParameter/Organization-address-use.'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address. See http://hl7.org/fhir/SearchParameter/Organization-address-city.'
	}
};
